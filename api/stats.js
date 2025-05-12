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

// Log environment variables for debugging
console.log('[VERCEL_LOG] Database connection setup:');
console.log('[VERCEL_LOG] - DATABASE_URL exists:', !!process.env.DATABASE_URL);
console.log('[VERCEL_LOG] - DB_HOST:', process.env.DB_HOST || 'not set');
console.log('[VERCEL_LOG] - DB_NAME:', process.env.DB_NAME || 'not set');
console.log('[VERCEL_LOG] - DB_USER:', process.env.DB_USER ? 'set' : 'not set');
console.log('[VERCEL_LOG] - DB_PORT:', process.env.DB_PORT || 'not set');
console.log('[VERCEL_LOG] - NODE_ENV:', process.env.NODE_ENV || 'not set');
console.log('[VERCEL_LOG] - VERCEL:', process.env.VERCEL || 'not set');

// If a connection string is provided (common for Neon DB)
if (process.env.DATABASE_URL) {
  console.log('[VERCEL_LOG] Using DATABASE_URL for connection');
  poolConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  };
} else {
  // Otherwise use individual connection parameters
  console.log('[VERCEL_LOG] Using individual connection parameters');
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
  
  console.log('[VERCEL_LOG] Connection config (without password):');
  console.log('[VERCEL_LOG] - user:', poolConfig.user);
  console.log('[VERCEL_LOG] - host:', poolConfig.host);
  console.log('[VERCEL_LOG] - database:', poolConfig.database);
  console.log('[VERCEL_LOG] - port:', poolConfig.port);
  console.log('[VERCEL_LOG] - ssl:', JSON.stringify(poolConfig.ssl));
}

const pool = new Pool(poolConfig);

// Initialize database
const initDb = async () => {
  try {
    console.log('[VERCEL_LOG] Initializing database in stats.js...');
    
    // Create topics table if it doesn't exist
    console.log('[VERCEL_LOG] Creating completed_topics table if it doesn\'t exist');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS completed_topics (
        id SERIAL PRIMARY KEY,
        topic_path VARCHAR(255) NOT NULL UNIQUE,
        completed BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    
    console.log('[VERCEL_LOG] Database initialized successfully');
    
    // Check if we have any sample data
    console.log('[VERCEL_LOG] Checking for existing data');
    const result = await pool.query('SELECT COUNT(*) FROM completed_topics');
    const count = parseInt(result.rows[0].count);
    console.log('[VERCEL_LOG] Current topic count:', count);
    
    // Add some sample data if the table is empty
    if (count === 0) {
      console.log('[VERCEL_LOG] Adding sample completed topics...');
      
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
      
      console.log('[VERCEL_LOG] Sample topics to add:', JSON.stringify(sampleTopics));
      
      // Insert each sample topic
      for (const topicPath of sampleTopics) {
        try {
          console.log('[VERCEL_LOG] Inserting sample topic:', topicPath);
          const insertResult = await pool.query(
            'INSERT INTO completed_topics (topic_path, completed) VALUES ($1, $2) ON CONFLICT (topic_path) DO NOTHING RETURNING *',
            [topicPath, true]
          );
          console.log(`[VERCEL_LOG] Added sample topic: ${topicPath}`, JSON.stringify(insertResult.rows));
        } catch (insertError) {
          console.error(`[VERCEL_LOG] Error adding sample topic ${topicPath}:`, insertError.message);
          console.error('[VERCEL_LOG] Error code:', insertError.code);
          console.error('[VERCEL_LOG] Error stack:', insertError.stack);
        }
      }
      
      // Verify sample data was added
      console.log('[VERCEL_LOG] Verifying sample data was added');
      const verifyResult = await pool.query('SELECT COUNT(*) FROM completed_topics');
      const verifyCount = parseInt(verifyResult.rows[0].count);
      console.log('[VERCEL_LOG] After adding samples, topic count is now:', verifyCount);
      
      if (verifyCount > 0) {
        console.log('[VERCEL_LOG] Sample data added successfully');
        
        // Get all topics to verify
        const allTopics = await pool.query('SELECT * FROM completed_topics');
        console.log('[VERCEL_LOG] All topics in database:', JSON.stringify(allTopics.rows));
      } else {
        console.error('[VERCEL_LOG] Failed to add sample data - count is still 0');
      }
    }
  } catch (error) {
    console.error('[VERCEL_LOG] Error initializing database:', error.message);
    // Log more details about the error
    if (error.stack) {
      console.error('[VERCEL_LOG] Error stack:', error.stack);
    }
    if (error.code) {
      console.error('[VERCEL_LOG] Error code:', error.code);
    }
    if (error.detail) {
      console.error('[VERCEL_LOG] Error detail:', error.detail);
    }
  }
};

// Initialize database on startup
initDb();

// Get completion statistics for each day
app.get('/api/stats/days', async (req, res) => {
  try {
    console.log('[VERCEL_LOG] Fetching day statistics...');
    
    // Add cache control headers to prevent 304 responses during development/testing
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    
    // Log request details
    console.log('[VERCEL_LOG] Request headers:', JSON.stringify(req.headers));
    console.log('[VERCEL_LOG] Request query:', JSON.stringify(req.query));
    
    // Log environment variables (without sensitive values)
    console.log('[VERCEL_LOG] Environment check:');
    console.log('[VERCEL_LOG] - DATABASE_URL exists:', !!process.env.DATABASE_URL);
    console.log('[VERCEL_LOG] - DB_HOST:', process.env.DB_HOST || 'not set');
    console.log('[VERCEL_LOG] - DB_NAME:', process.env.DB_NAME || 'not set');
    console.log('[VERCEL_LOG] - DB_USER:', process.env.DB_USER ? 'set' : 'not set');
    console.log('[VERCEL_LOG] - DB_PORT:', process.env.DB_PORT || 'not set');
    console.log('[VERCEL_LOG] - NODE_ENV:', process.env.NODE_ENV || 'not set');
    console.log('[VERCEL_LOG] - VERCEL:', process.env.VERCEL || 'not set');
    
    // Test database connection first
    try {
      console.log('[VERCEL_LOG] Testing database connection...');
      const testResult = await pool.query('SELECT NOW()');
      console.log('[VERCEL_LOG] Database connection test successful:', JSON.stringify(testResult.rows[0]));
    } catch (testError) {
      console.error('[VERCEL_LOG] Database connection test failed:', testError.message);
      console.error('[VERCEL_LOG] Error code:', testError.code);
      console.error('[VERCEL_LOG] Error stack:', testError.stack);
      return res.status(500).json({ 
        error: 'Database connection failed', 
        details: testError.message,
        stack: testError.stack
      });
    }
    
    // Get all completed topics
    console.log('[VERCEL_LOG] Querying completed topics...');
    const result = await pool.query('SELECT * FROM completed_topics WHERE completed = true');
    const completedTopics = result.rows;
    
    console.log('[VERCEL_LOG] Found', completedTopics.length, 'completed topics');
    console.log('[VERCEL_LOG] Completed topics data:', JSON.stringify(completedTopics));
    
    if (completedTopics.length === 0) {
      // If no topics found, try to add sample data and query again
      console.log('[VERCEL_LOG] No topics found, attempting to add sample data...');
      await initDb();
      
      // Try querying again
      const retryResult = await pool.query('SELECT * FROM completed_topics WHERE completed = true');
      console.log('[VERCEL_LOG] After retry, found', retryResult.rows.length, 'completed topics');
      console.log('[VERCEL_LOG] Retry result data:', JSON.stringify(retryResult.rows));
      
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
    console.log('[VERCEL_LOG] Processing completed topics...');
    completedTopics.forEach(topic => {
      const path = topic.topic_path;
      console.log('[VERCEL_LOG] Processing topic path:', path);
      
      // Try to find a display name for this path
      let displayName = topicMap[path];
      
      // If no display name found, try to normalize the path and check again
      if (!displayName) {
        // Remove leading slash if present
        const normalizedPath = path.startsWith('/') ? path.substring(1) : path;
        displayName = topicMap[normalizedPath];
        console.log('[VERCEL_LOG] Trying normalized path:', normalizedPath, 'Result:', displayName || 'Not found');
        
        // Try with underscores instead of slashes
        if (!displayName) {
          const underscorePath = normalizedPath.replace('/', '_');
          displayName = topicMap[underscorePath];
          console.log('[VERCEL_LOG] Trying underscore path:', underscorePath, 'Result:', displayName || 'Not found');
        }
        
        // If still no display name, create one from the path
        if (!displayName) {
          const parts = normalizedPath.split('/');
          if (parts.length >= 2) {
            const topic = parts[1].replace(/-/g, ' ');
            displayName = topic.charAt(0).toUpperCase() + topic.slice(1);
            console.log('[VERCEL_LOG] Created display name from path:', displayName);
          }
        }
      }
      
      console.log('[VERCEL_LOG] Final display name for', path, ':', displayName || 'Not found');
      
      // Determine which day this topic belongs to
      if (path.includes('day1') || path.includes('/day1/')) {
        stats.day1.completed++;
        if (displayName) stats.day1.topics.push(displayName);
        console.log('[VERCEL_LOG] Added to day1, current topics:', JSON.stringify(stats.day1.topics));
      } else if (path.includes('day2') || path.includes('/day2/')) {
        stats.day2.completed++;
        if (displayName) stats.day2.topics.push(displayName);
        console.log('[VERCEL_LOG] Added to day2, current topics:', JSON.stringify(stats.day2.topics));
      } else if (path.includes('day3') || path.includes('/day3/')) {
        stats.day3.completed++;
        if (displayName) stats.day3.topics.push(displayName);
        console.log('[VERCEL_LOG] Added to day3, current topics:', JSON.stringify(stats.day3.topics));
      } else if (path.includes('day4') || path.includes('/day4/')) {
        stats.day4.completed++;
        if (displayName) stats.day4.topics.push(displayName);
        console.log('[VERCEL_LOG] Added to day4, current topics:', JSON.stringify(stats.day4.topics));
      } else if (path.includes('day5') || path.includes('/day5/')) {
        stats.day5.completed++;
        if (displayName) stats.day5.topics.push(displayName);
        console.log('[VERCEL_LOG] Added to day5, current topics:', JSON.stringify(stats.day5.topics));
      } else {
        console.log('[VERCEL_LOG] Could not determine day for topic:', path);
      }
    });
    
    console.log('[VERCEL_LOG] Final stats object:', JSON.stringify(stats));
    res.json(stats);
  } catch (error) {
    console.error('[VERCEL_LOG] Error fetching day statistics:', error);
    console.error('[VERCEL_LOG] Error message:', error.message);
    console.error('[VERCEL_LOG] Error code:', error.code);
    console.error('[VERCEL_LOG] Error stack:', error.stack);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
});

// Handle OPTIONS requests for CORS preflight
app.options('/api/stats/days', cors());

// Export the Express API
module.exports = app;