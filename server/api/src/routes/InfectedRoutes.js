const express = require('express');

const InfectedController = require('../controllers/InfectedController');

const route = express.Router();

route.get('/', InfectedController.list);
route.post('/', InfectedController.store);

module.exports = route;
