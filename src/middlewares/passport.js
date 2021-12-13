// const passport = require('passport');
// const passportJwt = require('passport-jwt');
// const config = require('../config/auth');
// const ExtractJwt = passportJwt.ExtractJwt;
// const StrategyJwt = passportJwt.Strategy;
// const User = require('../models/User');
// const jwt = require('jsonwebtoken')
// require('dotenv').config()

// let params = {
//   secretOrKey: config.jwtSecret,
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
// };

// module.exports = function() {
//   const strategy = new StrategyJwt(params, function(payload, done){
//     const user = User[payload.id]
//     if(user){
//       return done(null, {id: user.id})
//     }else{
//       return done(new Error('usuário não encontrado'), null)
//     }
//   });
//   passport.use(strategy);
//   return {
//     initialize: function() {
//       return passport.initialize();
//     },
//     authenticate: function() {
//       return passport.authenticate("jwt", config.jwtSession);
//     }
//   }
// }
