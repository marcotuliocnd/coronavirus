const express = require('express');

const CoordinatesController = require('../controllers/CoordinatesController');
const authMiddleware = require('../middlewares');

const route = express.Router();

route.get('/', CoordinatesController.list);
route.post('/', authMiddleware, CoordinatesController.store);
route.patch('/', authMiddleware, CoordinatesController.update);

module.exports = route;
