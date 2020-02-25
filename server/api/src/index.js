const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGOURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());
app.use(cors());
app.listen(process.env.PORT, () => {
  console.log(`API está executando na porta ${process.env.PORT}`);
});
