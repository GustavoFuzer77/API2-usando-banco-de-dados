const User = require("../models/User");

exports.store = async (req, res, next) => {
  try{
    const newUser = await User.create();
    res.json(newUser);
  }catch(err){
    res.status(400);
    res.json({errors: err.errors.map((err) => err.message)})
  }
}
