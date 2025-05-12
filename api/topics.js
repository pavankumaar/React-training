// Serverless function for handling topic-related API requests
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
    console.log('Initializing database in topics.js...');
    
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

// Get all topics
app.get('/api/topics', async (req, res) => {
  try {
    console.log('Fetching topics from database...');
    
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
    
    // Now fetch the topics
    const result = await pool.query('SELECT * FROM completed_topics ORDER BY created_at DESC');
    console.log('Topics fetched successfully:', result.rows.length, 'topics found');
    
    // Return the topics
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching topics:', error);
    res.status(500).json({ 
      error: 'Server error', 
      details: error.message,
      stack: error.stack
    });
  }
});

// Get a specific topic
app.get('/api/topics/:topicPath', async (req, res) => {
  try {
    const { topicPath } = req.params;
    const result = await pool.query(
      'SELECT * FROM completed_topics WHERE topic_path = $1',
      [topicPath]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching topic:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Create or update a topic
app.post('/api/topics', async (req, res) => {
  try {
    const { topicPath, completed } = req.body;
    
    // Check if topic already exists
    const existingTopic = await pool.query(
      'SELECT * FROM completed_topics WHERE topic_path = $1',
      [topicPath]
    );
    
    if (existingTopic.rows.length > 0) {
      // Update existing topic
      const result = await pool.query(
        'UPDATE completed_topics SET completed = $1, updated_at = CURRENT_TIMESTAMP WHERE topic_path = $2 RETURNING *',
        [completed, topicPath]
      );
      return res.json(result.rows[0]);
    }
    
    // Create new topic
    const result = await pool.query(
      'INSERT INTO completed_topics (topic_path, completed) VALUES ($1, $2) RETURNING *',
      [topicPath, completed]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating/updating topic:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Handle OPTIONS requests for CORS preflight
app.options('/api/topics', cors());

// Export the Express API
module.exports = app;