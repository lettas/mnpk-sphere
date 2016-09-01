var webpack = require("webpack");

module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'mnpk-sphere.js'
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ],
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

