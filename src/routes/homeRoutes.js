const express = require('express');
const routes = express.Router()
const HomeController = require('../controllers/homeController')

routes.get('/', HomeController.homePage )

module.exports = routes;