const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/User');

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({
      errors: ['Precisa estar logado.']
    })
  }

  const [, token] = authorization.split(' ')
  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET)
    const { id, email } = data;

    const user = await User.findOne({ where: { id, email } })

    if(!user){
      res.status(401).json({
        errors: ['Usuário inválido, logue novamente.']
      })
    }

    req.userId = id;
    req.userEmail = email;
    next()
  } catch (err) {
    res.status(401).json({
      errors: ['token inválido.']
    })
  }

}