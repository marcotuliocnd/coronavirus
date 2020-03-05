const express = require('express');

const ArticleController = require('../controllers/ArticleController');
const authMiddleware = require('../middlewares');
const uploadMiddleware = require('../middlewares/files');

const route = express.Router();

route.get('/', ArticleController.list);
route.get('/:article', ArticleController.show);
route.post('/', [uploadMiddleware, authMiddleware], ArticleController.store);
route.delete('/:article', [uploadMiddleware, authMiddleware], ArticleController.remove);
route.patch('/:article', [uploadMiddleware, authMiddleware], ArticleController.update);

module.exports = route;
