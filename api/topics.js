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

if (process.env.DATABASE_URL) {
  // If a connection string is provided (common for Neon DB)
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
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'react_training',
    password: process.env.DB_PASSWORD || 'postgres',
    port: process.env.DB_PORT || 5432,
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  };
}

const pool = new Pool(poolConfig);

// Get all topics
app.get('/api/topics', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM completed_topics ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching topics:', error);
    res.status(500).json({ error: 'Server error' });
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