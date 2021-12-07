const express = require('express');
const route = express.Router();
const tokenRoutes = require('../controllers/tokenController')


route.post('/tokens', tokenRoutes.store);

module.exports = route;