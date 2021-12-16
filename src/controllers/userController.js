const User = require('../models/User');
const FotoUser = require('../models/UserFoto');

exports.index = async (req, res) => {
  try{
    const allUsers = await User.findAll({ 
      attributes: ['id', 'nome', 'email', 'created_at', 'descricao'],
      order: [['id', 'DESC'], ],
      include: {
        model: FotoUser,
        attributes: ['url', 'filename']
      }
    });
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
    const showPerId = await User.findByPk(req.userId, {
      attributes: ['id', 'nome', 'email', 'idade', 'descricao'],
      order: [['id', 'DESC'],[FotoUser, 'id', 'DESC']],
      include: {
        model: FotoUser,
        attributes: ['url', 'filename']
      }
    })
    res.json(showPerId)
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