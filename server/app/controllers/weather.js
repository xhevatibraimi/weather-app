const config = require('../config/config');
const { } = require("../services");
const axios = require("axios");

const search = async (req, res, next) => {
  const cityName = req.query.cityName;

  try {
    const { data } = await axios.get(`${config.weatherApi.routes.dailyForecast.url}?q=${cityName}&appid=${config.weatherApi.apiKey}`);
    console.log(data);
    res.json(data);
  } catch (e) {
    console.warn(e);
    res.json({ error: "error" });
  }
};

module.exports = {
  search
};
