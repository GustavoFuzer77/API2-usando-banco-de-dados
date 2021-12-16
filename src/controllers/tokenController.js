require('dotenv').config()
const User = require("../models/User");
const jwt = require('jsonwebtoken');

exports.store = async (req, res) => {
  const { email = '', password = '' } = req.body;
  if (!email || !password) {
    res.status(401).json({
      errors: ['Credenciais inválidas.']
    })
  }
  const user = await User.findOne({ where: { email } })
  if (!user) {
    res.status(401).json({
      errors: ['Usuário não existe']
    })
  }
  if (!(await user.passwordIsValid(password))) {
    return res.status(401).json({
      errors: ['Senha inválida.']
    })
  }

  const { id, nome, idade } = user;
  const token = jwt.sign({ id, email, nome, idade }, process.env.TOKEN_SECRET, { expiresIn: process.env.TOKEN_EXPIRE });
  return res.json({ token })
}