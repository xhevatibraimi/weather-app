const express = require('express');
const path = require('path');
const config = require('../config/config');
const Route = express.Router();
const API = {}

API.Weather = require(config.root + '/controllers/weather');

// api
Route
  .get('/api/weather/search', API.Weather.search)
  .get('/', (req, res) => {
    res.sendFile(path.resolve(path.normalize(path.join(__dirname,"..",config.frontend.indexHtmlPath))));
  });

module.exports = Route;
