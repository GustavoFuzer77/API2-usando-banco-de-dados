const Sequelize = require('sequelize');
const config = require('../config/database');
const User = require('../models/User');
const Comida = require('../models/Comida');
const FotoComida = require('../models/FotoComida');


const models = [User, Comida, FotoComida];

const connection = new Sequelize(config)
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));