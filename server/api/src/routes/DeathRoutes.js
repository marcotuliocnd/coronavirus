const express = require('express');

const DeathController = require('../controllers/DeathController');
const authMiddleware = require('../middlewares');

const route = express.Router();

route.get('/', DeathController.list);
route.post('/', authMiddleware, DeathController.store);

module.exports = route;
