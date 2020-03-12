const express = require('express');

const StatusController = require('../controllers/StatusController');
const authMiddleware = require('../middlewares');

const route = express.Router();

route.get('/', StatusController.list);
route.post('/', authMiddleware, StatusController.store);

module.exports = route;
