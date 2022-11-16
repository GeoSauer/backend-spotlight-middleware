const { Router } = require('express');
const teapot = require('../middleware/teapot');
const error = require('../middleware/error');
const payment = require('../middleware/payment');

(module.exports = Router().get('/teapot', [error, teapot], (req, res) => {
  res.json(req.error);
})).get('/payment', [error, payment], (req, res) => {
  res.json(req.error);
});
