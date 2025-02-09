const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectToDatabase=require('./database/db');
const Routes = require('./routes/user.routes');

const cookieParser = require('cookie-parser');
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/users', userRoutes);

module.exports = app;
