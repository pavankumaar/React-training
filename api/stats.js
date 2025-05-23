// Serverless function for handling stats-related API requests
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

// PostgreSQL connection
let poolConfig;

// Default connection for when environment variables are not set
const DEFAULT_DB_CONNECTION = {
  user: 'postgres',
  host: 'localhost',
  database: 'react_training',
  password: 'postgres',
  port: 5432,
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
};

// If a connection string is provided (common for Neon DB)
if (process.env.DATABASE_URL) {
  poolConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  };
} else {
  // Otherwise use individual connection parameters
  poolConfig = {
    user: process.env.DB_USER || DEFAULT_DB_CONNECTION.user,
    host: process.env.DB_HOST || DEFAULT_DB_CONNECTION.host,
    database: process.env.DB_NAME || DEFAULT_DB_CONNECTION.database,
    password: process.env.DB_PASSWORD || DEFAULT_DB_CONNECTION.password,
    port: process.env.DB_PORT || DEFAULT_DB_CONNECTION.port,
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  };
}

const pool = new Pool(poolConfig);

// Initialize database
const initDb = async () => {
  try {
    // Create topics table if it doesn't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS completed_topics (
        id SERIAL PRIMARY KEY,
        topic_path VARCHAR(255) NOT NULL UNIQUE,
        completed BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    // Check if we have any sample data
    const result = await pool.query('SELECT COUNT(*) FROM completed_topics');
    const count = parseInt(result.rows[0].count);
    
    // Add some sample data if the table is empty
    if (count === 0) {
      // Sample topics to mark as completed
      const sampleTopics = [
        'day1/html-basics',
        'day1/headings',
        'day1/paragraphs-text',
        'day1/attributes',
        'day2/css-introduction',
        'day2/css-selectors',
        'day3/flexbox-grid'
      ];
      
      // Insert each sample topic
      for (const topicPath of sampleTopics) {
        try {
          await pool.query(
            'INSERT INTO completed_topics (topic_path, completed) VALUES ($1, $2) ON CONFLICT (topic_path) DO NOTHING RETURNING *',
            [topicPath, true]
          );
        } catch (insertError) {
          // Silently handle insert errors
        }
      }
    }
  } catch (error) {
    console.error('Error initializing database:', error.message);
  }
};

// Initialize database on startup
initDb();

// Get completion statistics for each day
app.get('/api/stats/days', async (req, res) => {
  try {
    // Add cache control headers to prevent 304 responses during development/testing
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    
    // Test database connection first
    try {
      await pool.query('SELECT NOW()');
    } catch (testError) {
      return res.status(500).json({ 
        error: 'Database connection failed', 
        details: testError.message
      });
    }
    
    // Get all completed topics
    const result = await pool.query('SELECT * FROM completed_topics WHERE completed = true');
    const completedTopics = result.rows;
    
    if (completedTopics.length === 0) {
      // If no topics found, try to add sample data and query again
      await initDb();
      
      // Try querying again
      const retryResult = await pool.query('SELECT * FROM completed_topics WHERE completed = true');
      
      if (retryResult.rows.length > 0) {
        completedTopics.push(...retryResult.rows);
      }
    }
    
    // Initialize stats object
    const stats = {
      day1: { completed: 0, total: 7, topics: [] },
      day2: { completed: 0, total: 5, topics: [] },
      day3: { completed: 0, total: 3, topics: [] },
      day4: { completed: 0, total: 3, topics: [] },
      day5: { completed: 0, total: 3, topics: [] }
    };
    
    // Map of topic paths to display names
    const topicMap = {
      'day1/html-basics': 'HTML Basics',
      'day1/headings': 'Headings',
      'day1/paragraphs-text': 'Paragraphs & Text',
      'day1/attributes': 'Attributes',
      'day1/tables': 'Tables',
      'day1/forms': 'Forms',
      'day1/images': 'Images',
      
      'day2/css-introduction': 'CSS Introduction',
      'day2/css-selectors': 'Selectors',
      'day2/classes-ids': 'Classes & IDs',
      'day2/div-span': 'Div & Span Elements',
      'day2/box-model': 'Box Model',
      
      'day3/flexbox-grid': 'Flexbox & Grid',
      'day3/styling-forms-buttons': 'Styling Forms & Buttons',
      'day3/responsive-design': 'Responsive Design',
      
      'day4/variables': 'Variables (let, const)',
      'day4/data-types': 'Data Types',
      'day4/operators-conditionals': 'Operators & Conditionals',
      
      'day5/functions': 'Functions',
      'day5/arrays-objects': 'Arrays & Objects',
      'day5/loops': 'Loops (for, forEach, map)'
    };
    
    // Process completed topics
    completedTopics.forEach(topic => {
      const path = topic.topic_path;
      
      // Try to find a display name for this path
      let displayName = topicMap[path];
      
      // If no display name found, try to normalize the path and check again
      if (!displayName) {
        // Remove leading slash if present
        const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
        displayName = topicMap[normalizedPath];
        
        // Try with underscores instead of slashes
        if (!displayName) {
          const underscorePath = normalizedPath.replace('/', '_');
          displayName = topicMap[underscorePath];
        }
        
        // If still no display name, create one from the path
        if (!displayName) {
          const parts = normalizedPath.split('/');
          if (parts.length >= 2) {
            const topic = parts[1].replace(/-/g, ' ');
            displayName = topic.charAt(0).toUpperCase() + topic.slice(1);
          }
        }
      }
      
      // Determine which day this topic belongs to
      if (path.includes('day1') || path.includes('/day1/')) {
        stats.day1.completed++;
        if (displayName) stats.day1.topics.push(displayName);
      } else if (path.includes('day2') || path.includes('/day2/')) {
        stats.day2.completed++;
        if (displayName) stats.day2.topics.push(displayName);
      } else if (path.includes('day3') || path.includes('/day3/')) {
        stats.day3.completed++;
        if (displayName) stats.day3.topics.push(displayName);
      } else if (path.includes('day4') || path.includes('/day4/')) {
        stats.day4.completed++;
        if (displayName) stats.day4.topics.push(displayName);
      } else if (path.includes('day5') || path.includes('/day5/')) {
        stats.day5.completed++;
        if (displayName) stats.day5.topics.push(displayName);
      }
    });
    
    res.json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
});

// Handle OPTIONS requests for CORS preflight
app.options('/api/stats/days', cors());

// Export the Express API
module.exports = app;