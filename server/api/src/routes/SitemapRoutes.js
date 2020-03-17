const express = require('express');
const SitemapController = require('../controllers/SitemapController');

const app = express();

app.use(SitemapController.sitemap, 'https://coronavirus.com.br');

module.exports = app;
