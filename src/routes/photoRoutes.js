const express = require('express');
const route = express.Router();
const uploadPhotoController = require('../controllers/uploadPhotoController')

route.post('/fotos', uploadPhotoController.store);

module.exports = route;