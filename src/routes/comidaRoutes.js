const express = require('express');
const route = express.Router();
const comidaController = require('../controllers/comidaController');
const loginReq = require('../middlewares/loginJwt');

route.post('/comida', loginReq, comidaController.store);
route.get('/comidas', comidaController.index);
route.delete('/comida/:id', loginReq, comidaController.delete);
route.put('/comida/:id', loginReq, comidaController.update);
route.get('/comida/:id', loginReq, comidaController.show);

module.exports = route;