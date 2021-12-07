const express = require('express');
const passport = require('../middlewares/passport')();
const route = express.Router();
const userRoutes = require('../controllers/userController')
const loginReq = require('../middlewares/loginJwt');


route.post('/user', userRoutes.store);
route.get('/users', userRoutes.index);
route.get('/user/', loginReq, userRoutes.show);
route.put('/user/', loginReq, userRoutes.update);
route.delete('/user/', loginReq, userRoutes.delete)

module.exports = route;