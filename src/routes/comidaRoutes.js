const express = require('express');
const route = express.Router();
const comidaController = require('../controllers/comidaController');
const loginReq = require('../middlewares/loginJwt');

route.post('/comida/', loginReq, comidaController.store);
route.get('/comidas', comidaController.index);
route.delete('/comida/', loginReq, comidaController.delete);
route.put('/comida/', loginReq, comidaController.update);
route.get('/comida/', loginReq, comidaController.show);

module.exports = route;