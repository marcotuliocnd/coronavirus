const express = require('express');

const SurvivorController = require('../controllers/SurvivorController');
const authMiddleware = require('../middlewares');

const route = express.Router();

route.get('/', SurvivorController.list);
route.post('/', authMiddleware, SurvivorController.store);

module.exports = route;
