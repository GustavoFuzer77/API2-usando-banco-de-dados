require('dotenv').config();
const express = require('express');
const homeRoute = require('./src/routes/homeRoutes');
const userRoute = require('./src/routes/userRoutes')
const app = express();
require('./src/database');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(homeRoute);
app.use(userRoute);



module.exports = app;