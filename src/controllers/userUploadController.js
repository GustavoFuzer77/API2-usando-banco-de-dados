const express = require('express');

const multer = require('multer');
const multerConfig = require('../config/multerUser');

const upload = multer(multerConfig).single('foto');

const UserFoto = require('../models/UserFoto');

exports.store = (req, res) => {
  return upload (req, res, async (err) => {
    if (err) {
      return res.status(400).json({
        errors: [err.code]
      })
    }

    try{
      const { originalname, filename } = req.file;
      const { user_id } = req.body;
      const foto = await UserFoto.create({ originalname, filename, user_id })
  
  
      res.json(foto);
  
  
    }catch(err){
      return res.status(400).json({
        errors: ['Item não existe']
      })
    }

  })

};