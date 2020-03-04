const express = require('express');

const TotalController = require('../controllers/TotalController');
const authMiddleware = require('../middlewares');

const route = express.Router();

route.get('/', TotalController.list);
route.post('/', authMiddleware, TotalController.store);

module.exports = route;
