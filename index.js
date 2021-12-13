require('dotenv').config()
require('./src/database/')
const express = require('express');
const app = express();
const homeRoute = require('./src/routes/homeRoutes');
const userRoute = require('./src/routes/userRoutes');
const tokenRoute = require('./src/routes/tokenRoutes');
const comidaRoute = require('./src/routes/comidaRoutes');
const uploadRoute = require('./src/routes/photoRoutes');

app.use(express.urlencoded({extended: true}))
app.use(express.json());






app.use(uploadRoute);
app.use(comidaRoute);
app.use(tokenRoute);
app.use(userRoute);
app.use(homeRoute);
module.exports = app;