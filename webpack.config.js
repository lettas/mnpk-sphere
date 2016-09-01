module.exports = {
  entry: './src/app.js',
  output: {
    path: './dist',
    filename: 'mnpk-sphere.js'
  },
  devtool: 'inline-source-map',
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

