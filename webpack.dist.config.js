/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');

// where you want to keep the compiled asset . Relative path.
var assetPath = './compiled/assets';

module.exports = {
  output: {
    path: assetPath,
    filename: 'main.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  progress: true,
  entry: [
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
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.css$/,
      loader: "style/useable!css"
    }, {
      test: /\.(png|jpg|woff|woff2|eot|svg|ttf)$/,
      loader: 'url?limit=100000'
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]

};
