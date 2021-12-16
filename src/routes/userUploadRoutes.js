const express = require('express');
const route = express.Router();
const userUploadController = require('../controllers/userUploadController')

route.post('/userphoto', userUploadController.store);

module.exports = route;