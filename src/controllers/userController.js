const User = require('../models/User');


exports.index = async (req, res) => {
  try{
    const allUsers = await User.findAll({ attributes: ['id', 'nome', 'email', 'created_at']});
    res.json(allUsers)
  }catch(err){
    res.status(400)
    res.json({
      errors: err.errors.map((err) => err.message)
    });
  }
}

exports.store = async (req, res) => {
  try{
    const newUser = await User.create(req.body)
    res.json(newUser)
  }catch(err){
    res.status(400);
    res.json({
      errors: err.errors.map((err) => err.message)
    });
  }
}

exports.show = async (req, res) => {
  try{
    const showPerId = await User.findByPk(req.userId)
    const { id, nome, email } = showPerId;
    res.json({ id, nome, email })
  }catch(err){
    res.status(404)
    res.json({
      errors: err.errors.map((err) => err.message)
    });
  }
}

exports.update = async (req, res) => {
  try{
    const updatePerId = await User.findByPk(req.userId)
    const novosDados = await updatePerId.update(req.body)
    res.json(novosDados)
  }catch(err){
    res.status(404)
    res.json({
      errors: err.errors.map((err) => err.message)
    });
  }
}

exports.delete = async (req, res) => {
  try{
    const id = req.userId;
    if(!id){
      res.status(400).json({
        errors: ['ID não encontrado.']
      })
    };
    const user = await User.findByPk(id);

    if(!user){
      res.status(400).json({
        errors: ['Usuário não existe!']
      })
    }
    await user.destroy();
    res.json(null)
  }catch(err){
    res.status(404)
    res.json({
      errors: err.errors.map((err) => err.message)
    });
  }
}