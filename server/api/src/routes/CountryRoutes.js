const express = require('express');

const CountryController = require('../controllers/CountryController');
const authMiddleware = require('../middlewares');

const route = express.Router();

route.get('/', CountryController.list);
route.post('/', authMiddleware, CountryController.store);

module.exports = route;
