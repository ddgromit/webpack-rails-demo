var config = require('./config.common');
var webpack = require('webpack');

config.devServer = {
  noInfo: true,
  inline: true,
  port: 3001
};

module.exports = config;
