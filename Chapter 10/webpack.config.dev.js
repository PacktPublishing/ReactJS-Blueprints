var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './source/index'
  ],
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: "A Wizard's Picnic",
      template: 'index.ejs',
      hash: true,
      inject: 'body'
    })
  ],
  module: {
    loaders: [{
      tests: /\.js?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'source')
    },
    {
          test: /\.scss$/,
          loader: 'style!css!sass'
        }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

