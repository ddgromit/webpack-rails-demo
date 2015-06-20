// Load up the common config so we can add stuff to it.
var config = require('./config.common');
var webpack = require('webpack');

// Merge
config.plugins = config.plugins.concat( [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
]);

module.exports = config;
