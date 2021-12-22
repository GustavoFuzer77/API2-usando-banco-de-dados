const express = require('express');
const Comida = require('../models/Comida');
const User = require('../models/User');
const Foto = require('../models/FotoComida');

exports.store = async (req, res) => {
  try {
    const user_id = req.userId;
    const { nome, preco, descricao } = req.body;
    console.log(user_id)

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.status(400).json({
        errors: ['usuário não encontrado.']
      })

    }
    const newFood = await Comida.create({ nome, preco, descricao, user_id })
    return res.json(newFood)
  } catch (err) {
    res.status(400).json({
      errors: err.errors.map((erro) => erro.message)
    })
  }
};

exports.index = async (req, res) => {
  try {
    const indexFood = await Comida.findAll({
      attributes: ['id', 'nome', 'preco', 'descricao', 'user_id'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename']
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
    const user_id = req.userId;

    const user = await User.findByPk(user_id, {
      include: { association: 'comidas', attributes: ['id', 'nome', 'descricao', 'preco'] }
    })

    if (!user) {
      return res.status(400).json({
        errors: ['usuário não encontrado.']
      })
    }
    res.json(user.comidas)
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