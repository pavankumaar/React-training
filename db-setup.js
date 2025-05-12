const { Pool } = require('pg');
require('dotenv').config();

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
    // For Neon DB, we don't need to create the database
    // It's already created when you set up your Neon project
    console.log('Using existing Neon database...');

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
    console.log('Table created successfully');

    console.log('Database initialization completed successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    await pool.end();
  }
};

// Run the initialization
initDb();