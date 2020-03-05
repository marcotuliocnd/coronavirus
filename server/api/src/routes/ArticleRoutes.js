const express = require('express');

const ArticleController = require('../controllers/ArticleController');
const authMiddleware = require('../middlewares');

const route = express.Router();

route.get('/', ArticleController.list);
route.get('/:article', ArticleController.show);
route.post('/', authMiddleware, ArticleController.store);
route.delete('/:article', authMiddleware, ArticleController.remove);
route.patch('/:article', authMiddleware, ArticleController.update);

module.exports = route;
