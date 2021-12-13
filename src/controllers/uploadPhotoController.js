const express = require('express');

exports.store = (req, res, next) => {
  res.json('rota -> /');
};