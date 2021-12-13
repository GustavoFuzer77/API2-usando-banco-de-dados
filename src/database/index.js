const Sequelize = require('sequelize');
const config = require('../config/database');
const User = require('../models/User');
const Comida = require('../models/Comida')

const models = [User, Comida];

const connection = new Sequelize(config)
models.forEach((model) => model.init(connection));