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
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
  },
};
