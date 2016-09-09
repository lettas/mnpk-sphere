var webpack = require("webpack");

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: './dist',
    filename: 'mnpk-sphere.js'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

