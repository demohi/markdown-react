var webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  entry: [
    './components.js'
  ],
  output: {
    filename: 'bundle.js',
  },
};
