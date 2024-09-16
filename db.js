// db.js

const { Pool } = require('pg');

// Create a new connection pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'employee_tracker',
    password: 'Zeus0312',
    port: 5432,  // Default PostgreSQL port
});

// Function to execute SQL queries
const query = (text, params) => pool.query(text, params);

module.exports = { query };