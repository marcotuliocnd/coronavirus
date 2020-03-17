const express = require('express');

const { check } = require('express-validator');
const ArticleController = require('../controllers/ArticleController');
const authMiddleware = require('../middlewares');
const uploadMiddleware = require('../middlewares/files');

const route = express.Router();

route.get('/', ArticleController.list);
route.get('/:article', ArticleController.show);
route.post('/', [
  uploadMiddleware,
  authMiddleware,
  check('title', 'O título não pode estar vazio.').notEmpty(),
  check('description', 'Descrição não pode estar vazia.').notEmpty(),
  check('content', 'Conteúdo não pode estar vazio.').notEmpty(),
  check('tags', 'Tags não podem estar vazias.').notEmpty(),
], ArticleController.store);
route.delete('/:article', [uploadMiddleware, authMiddleware], ArticleController.remove);
route.patch('/:article', [
  uploadMiddleware,
  authMiddleware,
  check('title', 'O título não pode estar vazio.').notEmpty(),
  check('description', 'Descrição não pode estar vazia.').notEmpty(),
  check('content', 'Conteúdo não pode estar vazio.').notEmpty(),
  check('tags', 'Tags não podem estar vazias.').notEmpty(),
], ArticleController.update);

module.exports = route;
