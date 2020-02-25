const express = require('express');

const DeathController = require('../controllers/DeathController');

const route = express.Router();

route.get('/', DeathController.list);
route.post('/', DeathController.store);

module.exports = route;
