const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const Cliente = require('../models/Cliente');
const User = require('../models/User')

const models = [Cliente, User]
const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection))
