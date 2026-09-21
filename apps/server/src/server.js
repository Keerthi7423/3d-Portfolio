const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

// Support loading .env from apps/server/.env or root .env
dotenv.config({ path: path.resolve(__dirname, '../.env') });
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });

const connectDB = require('./config/db');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Core Middleware Pipeline
app.use(cors({
  origin: 'http://localhost:5173', // Vite admin client
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Base Health Check Route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Start listening
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
