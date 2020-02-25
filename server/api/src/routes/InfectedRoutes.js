const express = require('express');

const InfectedController = require('../controllers/InfectedController');
const authMiddleware = require('../middlewares');

const route = express.Router();

route.get('/', InfectedController.list);
route.post('/', authMiddleware, InfectedController.store);

module.exports = route;
