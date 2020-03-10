const express = require('express');

const StatusController = require('../controllers/StatusController');
const authMiddleware = require('../middlewares');
const uploadMiddleware = require('../middlewares/anuncio');

const route = express.Router();

route.get('/', StatusController.list);
route.post('/', [uploadMiddleware, authMiddleware], StatusController.store);

module.exports = route;
