let config = (ROOT_PATH) => {
  var config = {
    server: {
      port: 3001,
      hostname: 'localhost',
      env: 'development'
    },
    frontend: {
      indexHtmlPath: '../client/build/index.html',
      reactAppPath: "../client/build"
    },
    weatherApi: {
      apiKey: '695bbac47baa63cd9176c061ae0c0f6a',
      routes: {
        dailyForecast: {
          url: 'https://samples.openweathermap.org/data/2.5/forecast/daily'
        }
      }
    },
    BaseApiURL: 'http://localhost:3001/api/',
    root: ROOT_PATH
  }
  return config;
};

module.exports = config;
