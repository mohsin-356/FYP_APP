const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectToDatabase=require('./database/db');
const userRoutes = require('./routes/user.routes');

const cookieParser = require('cookie-parser');
const cors = require("cors");
const bodyParser = require("body-parser");
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "10000MB" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(express.static(Path.join(__dirname, "public")));

app.use('/users', userRoutes);

module.exports = app;
