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

// Hardcoded connection for Neon DB (for Vercel deployment)
const NEON_DB_CONNECTION = {
  user: 'react_training_owner',
  host: 'ep-shrill-star-a4h59l0n-pooler.us-east-1.aws.neon.tech',
  database: 'react_training',
  password: 'npg_t0AvB2RzSbis',
  port: 5432,
  ssl: {
    require: true,
    rejectUnauthorized: false
  }
};

// For Vercel deployment, use the hardcoded connection
if (process.env.VERCEL) {
  console.log('Running on Vercel, using hardcoded Neon DB connection');
  poolConfig = NEON_DB_CONNECTION;
} else if (process.env.DATABASE_URL) {
  // If a connection string is provided (common for Neon DB)
  console.log('Using DATABASE_URL for connection');
  poolConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  };
} else {
  // Otherwise use individual connection parameters
  console.log('Using individual connection parameters');
  poolConfig = {
    user: process.env.DB_USER || NEON_DB_CONNECTION.user,
    host: process.env.DB_HOST || NEON_DB_CONNECTION.host,
    database: process.env.DB_NAME || NEON_DB_CONNECTION.database,
    password: process.env.DB_PASSWORD || NEON_DB_CONNECTION.password,
    port: process.env.DB_PORT || NEON_DB_CONNECTION.port,
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
    console.log('Initializing database in stats.js...');
    
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
    
    console.log('Database initialized successfully');
    
    // Check if we have any sample data
    const result = await pool.query('SELECT COUNT(*) FROM completed_topics');
    const count = parseInt(result.rows[0].count);
    console.log('Current topic count:', count);
    
    // Add some sample data if the table is empty
    if (count === 0) {
      console.log('Adding sample completed topics...');
      
      // Sample topics to mark as completed
      const sampleTopics = [
        'day1/html-basics',
        'day1/headings',
        'day2/css-introduction'
      ];
      
      // Insert each sample topic
      for (const topicPath of sampleTopics) {
        await pool.query(
          'INSERT INTO completed_topics (topic_path, completed) VALUES ($1, $2) ON CONFLICT (topic_path) DO NOTHING',
          [topicPath, true]
        );
      }
      
      console.log('Sample data added successfully');
    }
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

// Initialize database on startup
initDb();

// Get completion statistics for each day
app.get('/api/stats/days', async (req, res) => {
  try {
    console.log('Fetching day statistics...');
    
    // Test database connection first
    try {
      const testResult = await pool.query('SELECT NOW()');
      console.log('Database connection test successful:', testResult.rows[0]);
    } catch (testError) {
      console.error('Database connection test failed:', testError);
      return res.status(500).json({ 
        error: 'Database connection failed', 
        details: testError.message,
        stack: testError.stack
      });
    }
    
    // Get all completed topics
    const result = await pool.query('SELECT * FROM completed_topics WHERE completed = true');
    const completedTopics = result.rows;
    
    console.log('Found', completedTopics.length, 'completed topics');
    
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
      const displayName = topicMap[path];
      
      if (path.includes('day1')) {
        stats.day1.completed++;
        if (displayName) stats.day1.topics.push(displayName);
      } else if (path.includes('day2')) {
        stats.day2.completed++;
        if (displayName) stats.day2.topics.push(displayName);
      } else if (path.includes('day3')) {
        stats.day3.completed++;
        if (displayName) stats.day3.topics.push(displayName);
      } else if (path.includes('day4')) {
        stats.day4.completed++;
        if (displayName) stats.day4.topics.push(displayName);
      } else if (path.includes('day5')) {
        stats.day5.completed++;
        if (displayName) stats.day5.topics.push(displayName);
      }
    });
    
    res.json(stats);
  } catch (error) {
    console.error('Error fetching day statistics:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Handle OPTIONS requests for CORS preflight
app.options('/api/stats/days', cors());

// Export the Express API
module.exports = app;