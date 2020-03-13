const express = require('express');
const { check } = require('express-validator');

const StatusController = require('../controllers/StatusController');
const authMiddleware = require('../middlewares');

const route = express.Router();

route.get('/', StatusController.list);
route.post('/', [
    authMiddleware,
    check("title","O título não pode estar vazio.").notEmpty(),
    check("description","A descrição não pode estar vazio.").notEmpty(),
    check("maintenance","Você deve especificar o status da manutenção.").notEmpty(),
    check("announcementRectangle","O anúncio um não pode estar vazio.").notEmpty(),
    check("announcementSquare","O anúncio dois não pode estar vazio.").notEmpty(),
    check("coronaTitle","O título do rodapé não pode estar vazio.").notEmpty(),
    check("coronaText","O texto do rodapé não pode estar vazio.").notEmpty()
  ], StatusController.store);

module.exports = route;
