require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const connectMongoDB = require('./mongoose');
const route = require('./route');


module.exports = async () => {
  await connectMongoDB();
  const app = express();
  
  if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
    app.use(helmet());
  } else {
    app.use(cors());
  }

  app.use(bodyParser.json());

  route(app);
  return app;
};

