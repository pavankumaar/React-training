const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.SERVER_PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
let poolConfig;

if (process.env.DATABASE_URL) {
  // If a connection string is provided (common for Neon DB)
  poolConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      require: true,
      rejectUnauthorized: false // Use this for development only, remove in production
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
      rejectUnauthorized: false // Use this for development only, remove in production
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
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};

// Initialize database on startup
initDb();

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database connected successfully. Server time:', res.rows[0].now);
  }
});

// Routes
// Health check endpoint
app.get('/api/health', (req, res) => {
  pool.query('SELECT 1', (err) => {
    if (err) {
      console.error('Health check failed:', err);
      return res.status(500).json({ status: 'error', message: 'Database connection failed' });
    }
    res.json({ status: 'ok', message: 'Server is running and database is connected' });
  });
});

app.get('/api/topics', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM completed_topics');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching topics:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

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
    const result = await pool.query('SELECT * FROM completed_topics WHERE completed = true');
    
    // Map of topic paths to display names
    const topicMap = {
      // Day 1 topics
      'day1/html-basics': 'HTML Basics',
      '/day1/html-basics': 'HTML Basics',
      'day1_html-basics': 'HTML Basics',
      
      'day1/headings': 'Headings',
      '/day1/headings': 'Headings',
      'day1_headings': 'Headings',
      
      'day1/paragraphs-text': 'Paragraphs & Text',
      '/day1/paragraphs-text': 'Paragraphs & Text',
      'day1_paragraphs-text': 'Paragraphs & Text',
      
      'day1/attributes': 'Attributes',
      '/day1/attributes': 'Attributes',
      'day1_attributes': 'Attributes',
      
      'day1/tables': 'Tables',
      '/day1/tables': 'Tables',
      'day1_tables': 'Tables',
      
      'day1/forms': 'Forms',
      '/day1/forms': 'Forms',
      'day1_forms': 'Forms',
      
      'day1/images': 'Images',
      '/day1/images': 'Images',
      'day1_images': 'Images',
      
      // Day 2 topics
      'day2/css-introduction': 'CSS Introduction',
      '/day2/css-introduction': 'CSS Introduction',
      'day2_css-introduction': 'CSS Introduction',
      
      'day2/css-selectors': 'Selectors',
      '/day2/css-selectors': 'Selectors',
      'day2_css-selectors': 'Selectors',
      
      'day2/classes-ids': 'Classes & IDs',
      '/day2/classes-ids': 'Classes & IDs',
      'day2_classes-ids': 'Classes & IDs',
      
      'day2/div-span': 'Div & Span Elements',
      '/day2/div-span': 'Div & Span Elements',
      'day2_div-span': 'Div & Span Elements',
      
      'day2/box-model': 'Box Model',
      '/day2/box-model': 'Box Model',
      'day2_box-model': 'Box Model',
      
      // Day 3 topics
      'day3/flexbox-grid': 'Flexbox & Grid',
      '/day3/flexbox-grid': 'Flexbox & Grid',
      'day3_flexbox-grid': 'Flexbox & Grid',
      
      'day3/styling-forms-buttons': 'Styling Forms & Buttons',
      '/day3/styling-forms-buttons': 'Styling Forms & Buttons',
      'day3_styling-forms-buttons': 'Styling Forms & Buttons',
      
      'day3/responsive-design': 'Responsive Design',
      '/day3/responsive-design': 'Responsive Design',
      'day3_responsive-design': 'Responsive Design',
      
      // Day 4 topics
      'day4/variables': 'Variables (let, const)',
      '/day4/variables': 'Variables (let, const)',
      'day4_variables': 'Variables (let, const)',
      
      'day4/data-types': 'Data Types',
      '/day4/data-types': 'Data Types',
      'day4_data-types': 'Data Types',
      
      'day4/operators-conditionals': 'Operators & Conditionals',
      '/day4/operators-conditionals': 'Operators & Conditionals',
      'day4_operators-conditionals': 'Operators & Conditionals',
      
      // Day 5 topics
      'day5/functions': 'Functions',
      '/day5/functions': 'Functions',
      'day5_functions': 'Functions',
      
      'day5/arrays-objects': 'Arrays & Objects',
      '/day5/arrays-objects': 'Arrays & Objects',
      'day5_arrays-objects': 'Arrays & Objects',
      
      'day5/loops': 'Loops (for, forEach, map)',
      '/day5/loops': 'Loops (for, forEach, map)',
      'day5_loops': 'Loops (for, forEach, map)'
    };
    
    // Initialize stats object
    const stats = {
      day1: {
        completed: 0,
        total: 7,
        topics: []
      },
      day2: {
        completed: 0,
        total: 5,
        topics: []
      },
      day3: {
        completed: 0,
        total: 3,
        topics: []
      },
      day4: {
        completed: 0,
        total: 3,
        topics: []
      },
      day5: {
        completed: 0,
        total: 3,
        topics: []
      }
    };
    
    // Process completed topics
    result.rows.forEach(topic => {
      const path = topic.topic_path;
      const displayName = topicMap[path];
      
      // Check which day this topic belongs to
      if (path.includes('day1') || path.includes('/day1/')) {
        stats.day1.completed++;
        if (displayName) {
          stats.day1.topics.push(displayName);
        }
      } else if (path.includes('day2') || path.includes('/day2/')) {
        stats.day2.completed++;
        if (displayName) {
          stats.day2.topics.push(displayName);
        }
      } else if (path.includes('day3') || path.includes('/day3/')) {
        stats.day3.completed++;
        if (displayName) {
          stats.day3.topics.push(displayName);
        }
      } else if (path.includes('day4') || path.includes('/day4/')) {
        stats.day4.completed++;
        if (displayName) {
          stats.day4.topics.push(displayName);
        }
      } else if (path.includes('day5') || path.includes('/day5/')) {
        stats.day5.completed++;
        if (displayName) {
          stats.day5.topics.push(displayName);
        }
      }
    });
    
    res.json(stats);
  } catch (error) {
    console.error('Error fetching day statistics:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});