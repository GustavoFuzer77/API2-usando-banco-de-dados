const express = require('express');
const route = express.Router();
const multer = require('multer');
const uploadPhotoController = require('../controllers/uploadPhotoController')
const multerConfig = require('../config/multer');


const upload = multer(multerConfig);

route.post('/fotos', upload.single('foto'), uploadPhotoController.store);

module.exports = route;