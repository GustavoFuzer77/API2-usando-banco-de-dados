const express = require('express');

exports.home = (req, res, next) => {
  res.json('rota -> /');
};