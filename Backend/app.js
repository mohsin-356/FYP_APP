const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const cloudinary = require('cloudinary');
const connectToDatabase = require('./database/db');
const userRoutes = require('./routes/user.routes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Connect to the database
connectToDatabase();

//config the cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    // secure: true,
    // redirect_secure: true,
    // use_path_url: true,
    // url: 'https://res.cloudinary.com/smarttech/image/upload'
 });

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5000MB' }));
app.use(bodyParser.urlencoded({limit:'5000MB', extended: true }));
app.use(cookieParser());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/users', userRoutes);

module.exports = app;
