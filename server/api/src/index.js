const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const fs = require('fs');
const https = require('https');
const expressSitemap = require('express-sitemap-xml');

const connectDb = require('./config/database');

dotenv.config();

connectDb();

const app = express();

const corsConfig = {
  origin: '*',
  methods: 'POST, GET, PUT, DELETE, OPTIONS, PATCH',
};

app.use('/public/', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsConfig));

app.use('/infecteds', require('./routes/InfectedRoutes'));
app.use('/survivors', require('./routes/SurvivorRoutes'));
app.use('/deaths', require('./routes/DeathRoutes'));
app.use('/auth', require('./routes/UserRoutes'));
app.use('/countries', require('./routes/CountryRoutes'));
app.use('/totals', require('./routes/TotalRoutes'));
app.use('/articles', require('./routes/ArticleRoutes'));
app.use('/coordinates', require('./routes/CoordinatesRoutes'));
app.use('/', require('./routes/StatusRoutes'));
app.use(expressSitemap(require('./controllers/SitemapController'), 'https://coronavirus.com.br');

if (process.env.NODE_ENV === 'development') {
  app.listen(process.env.PORT, () => {
    console.log(`API está executando na porta ${process.env.PORT}`);
  });
} else {
  https.createServer({
    key: fs.readFileSync('privkey.pem').toString(),
    cert: fs.readFileSync('fullchain.pem').toString(),
  }, app).listen(process.env.PORT || 8800, () => {
    console.log(`API está executando na porta ${process.env.PORT} em HTTPS`);
  });
}
