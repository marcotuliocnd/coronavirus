const express = require('express');

const SurvivorController = require('../controllers/SurvivorController');

const route = express.Router();

route.get('/', SurvivorController.list);
route.post('/', SurvivorController.store);

module.exports = route;
