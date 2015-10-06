/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');

var assetPath = require('path').join(__dirname, 'dist');

module.exports = {

  output: {
    path: assetPath,
    filename: 'main.js',
    publicPath: '/assets/'
  },

  cache: true,
  debug: true,
  devtool: 'sourcemap',
  entry: [
    'webpack-dev-server/client?http://localhost:9999',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'components': __dirname + '/src/components/',
      'pages': __dirname + '/src/pages/'
    }
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: [/node_module/, 'server.js'],
      loader: 'eslint'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.css$/,
      loader: "style/useable!css!autoprefixer"
    }, {
      test: /\.(png|jpg|woff|woff2|eot|svg|ttf)$/,
      loader: 'url?limit=100000'
    },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true
    })
  ],

};
