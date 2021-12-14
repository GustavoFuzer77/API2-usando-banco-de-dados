const express = require('express');
const Comida = require('../models/Comida');
const Foto = require('../models/FotoComida');

exports.store = async (req, res) => {
  try {
    const newFood = await Comida.create(req.body)
    res.json(newFood)
  } catch (err) {
    res.status(400).json({
      errors: err.errors.map((erro) => erro.message)
    })
  }
};

exports.index = async (req, res) => {
  try {
    const indexFood = await Comida.findAll({
      attributes: ['id', 'nome', 'preco', 'descricao'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
      }
    })
    res.json(indexFood)
  } catch (err) {
    res.status(400).json({
      errors: err.errosr.map((erro) => message)
    })
  }
}

exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const showItem = await Comida.findByPk(id)
    if (!showItem) {
      res.status(404).json({
        errors: ['O ITEM não foi encontrado']
      })
    }
    res.json(showItem)
  } catch (err) {
    res.status(404).json({
      errors: ['O ITEM não foi encontrado']
    })
  }
}

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Comida.findByPk(id)
    if (!deletedItem) {
      res.status(404).json({
        errors: ['O ITEM não foi encontrado.']
      })
    }
    deletedItem.destroy()
    res.json(deletedItem)
  } catch (err) {
    res.status(404)
    res.json({
      errors: err.errors.map((err) => err.message)
    });
  }
}

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await Comida.findByPk(id)
    if (!updatedItem) {
      res.status(404).json({
        errors: ['O ITEM não foi encontrado']
      })
    }
    updatedItem.update(req.body)
    res.json(updatedItem)
  } catch (err) {
    res.status(404).json({
      errors: ['O ITEM não foi encontrado']
    })
  }
}