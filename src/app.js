require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const route = require('./route');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
  
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  app.use(helmet());
} else {
  app.use(cors());
}

app.use(bodyParser.json());
app.use(errorHandler);

route(app);

module.exports = app;

