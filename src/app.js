const express = require('express');
const router = require('./api/router');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/its_meteo', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('debug', true);

const app = express();

app.use(express.json());

app.use(router);

module.exports = app;