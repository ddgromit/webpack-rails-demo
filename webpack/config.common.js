var webpack = require('webpack');

module.exports = {
  // Top level file that requires all the other files for the browser.
  entry: ["./app/assets/javascripts/app"],

  // The single compiled file will be build/bundle.js
  output: {
    path: './public',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      // Babel is a transpiler that supports ES6 and JSX
      { test: /\.js$/, exclude: /(node_modules)|(bootstrap.*\.js)/, loaders: ['babel-loader']}
    ]
  },

  plugins: [
  ],
  
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },
};
