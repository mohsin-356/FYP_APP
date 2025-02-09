const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const connectToDatabase = require('./database/db');
const userRoutes = require('./routes/user.routes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to the database
connectToDatabase();

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: '10MB' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/users', userRoutes);

module.exports = app;
