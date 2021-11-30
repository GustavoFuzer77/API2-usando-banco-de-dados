const User = require("../models/User");

exports.store = async (req, res, next) => {
  try{
    const newUser = await User.create({
      nome: 'gustavo',
      email: 'guuhfuuzer@gmail.com',
      password: '123456'
    });
    res.json(newUser);
  }catch(err){
    res.status(400);
    res.json('deu erro')
  }
}
