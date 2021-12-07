const Sequelize = require('sequelize');
const config = require('../config/database');
const User = require('../models/User');

const models = [User];

const connection = new Sequelize(config)
models.forEach((model) => model.init(connection));