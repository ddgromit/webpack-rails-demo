var webpack = require('webpack');

module.exports = {
  // Top level file that requires all the other files for the browser.
  entry: {
    app: "./app/assets/javascripts/app",
    styles: "./app/assets/stylesheets/application.less"
  },

  output: {
    path: './public',
    filename: 'bundle.[name].js'
  },

  module: {
    loaders: [
      // Babel is a transpiler that supports ES6 and JSX
      { test: /\.js$/, exclude: /(node_modules)|(bootstrap.*\.js)/, loaders: ['babel-loader']},
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader"}
    ]
  },

  plugins: [],

  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ]
  },
};
