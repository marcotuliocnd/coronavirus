const express = require('express');

const UserController = require('../controllers/UserController');

const route = express.Router();

route.post('/register', UserController.register);
route.post('/login', UserController.login);
route.get('/', UserController.list);

module.exports = route;
