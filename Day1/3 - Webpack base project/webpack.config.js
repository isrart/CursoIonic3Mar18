var path = require('path');

module.exports = {

  entry: [
    './src/main.ts',
    './src/main.scss'
  ],

  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'main.bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          'sass-loader?sourceMap'
        ]
      }
    ]
  },

  stats: {
    colors: true
  },

  devtool: 'source-map',

  devServer: {
    contentBase: 'www/',
    open: true
  }
};