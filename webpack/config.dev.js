var config = require('./config.common');
var webpack = require('webpack');

config.devServer = {
  noInfo: true, 
  inline: true
};

module.exports = config;
