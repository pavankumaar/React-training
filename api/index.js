// This file is used for Vercel serverless functions
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

// For Vercel deployment
const isVercel = process.env.VERCEL === '1';

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
    console.log('Initializing database...');
    
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

// Health check endpoint
app.get('/api/health', (req, res) => {
  pool.query('SELECT 1', (err) => {
    if (err) {
      return res.status(500).json({ status: 'error', message: 'Database connection failed' });
    }
    res.json({ status: 'ok', message: 'Server is running and connected to the database' });
  });
});

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

// Get completion statistics for each day
app.get('/api/stats/days', async (req, res) => {
  try {
    // Get all completed topics
    const result = await pool.query('SELECT * FROM completed_topics WHERE completed = true');
    const completedTopics = result.rows;
    
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
app.options('*', cors());

// Export the Express API
module.exports = app;