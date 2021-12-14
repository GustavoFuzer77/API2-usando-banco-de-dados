const express = require('express');

const multer = require('multer');
const multerConfig = require('../config/multer');

const upload = multer(multerConfig).single('foto');

const FotoComida = require('../models/FotoComida');

exports.store = (req, res) => {
  return upload (req, res, async (err) => {
    if (err) {
      return res.status(400).json({
        errors: [err.code]
      })
    }

    try{
      const { originalname, filename } = req.file;
      const { comida_id } = req.body;
      const foto = await FotoComida.create({ originalname, filename, comida_id })
  
  
      res.json(foto);
  
  
    }catch(err){
      return res.status(400).json({
        errors: ['Item não existe']
      })
    }

  })

};