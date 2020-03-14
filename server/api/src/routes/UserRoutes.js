const express = require('express');
const authMiddleware = require('../middlewares');

const UserController = require('../controllers/UserController');

const route = express.Router();

route.post('/register', UserController.register);
route.post('/login', UserController.login);
route.get('/', UserController.list);
route.delete('/:id', authMiddleware, UserController.remove);
route.patch('/:id', authMiddleware, UserController.update);

module.exports = route;
