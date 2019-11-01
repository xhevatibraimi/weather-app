const express = require('express');
const path = require("path");
const config = require('./app/config/config');
const routes = require('./app/routes');
const app = express();

console.log(config);
app.config = config;
const reactAppPath = path.normalize(path.join(__dirname, config.frontend.reactAppPath));
console.log(reactAppPath);
app.use(express.static(reactAppPath));
app.use(express.static('public'));
app.use(routes);

app.listen(config.server.port, () => {
  console.log(`\nServer listening on port ${config.server.port} in ${config.server.env} mode`);
});

module.exports = app;
