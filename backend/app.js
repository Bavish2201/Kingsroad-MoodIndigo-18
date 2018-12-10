const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');

const app = express();

// Password: jzTOCSBHIPKfTgF7

mongoose.connect('mongodb+srv://bavish:jzTOCSBHIPKfTgF7@cluster0-oxfkj.mongodb.net/test?retryWrites=true')
  .then(() => {
    console.log('Connected to database');
  })
  .catch(() => {
    console.log('Database connection failed');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  console.log("Received request from ", req.headers.origin);
  next();
});

app.use('/api/register', registerRoutes);
app.use('/api/login', loginRoutes);

module.exports = app;
