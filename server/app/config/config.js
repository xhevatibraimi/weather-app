const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = require(`${__dirname}/${env}.config.js`)(rootPath);

module.exports = config;