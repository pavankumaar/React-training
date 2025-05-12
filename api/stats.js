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

// Handle OPTIONS requests for CORS preflight
app.options('/api/stats/days', cors());

// Export the Express API
module.exports = app;