'use strict';

var path = require('path');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var appRoot = path.join(__dirname, '/src');
var bowerRoot = path.join(__dirname, '/bower_components');
{{#sass}}
var styleRoot = appRoot + '/assets/styles';
{{/sass}}

module.exports = {
  cache: true,
  debug: true,
  entry: [appRoot + '/app.js'],
  output: {
    path: './dist',
    filename: 'bundle.js',
    chunkFilename: "[id].bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {{#sass}}
      {
        test: /\.scss$/,
        loaders: ['style', 'css', "sass?includePaths[]=" + styleRoot]
      },
      {{/sass}}
      {
        test: /\.html$/,
        loader: 'raw'
      },
      {
        test: /\.woff$/,
        loader: 'url?prefix=font/&limit=5000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf$/,
        loader: 'file?prefix=font/'
      },
      {
        test: /\.eot$/,
        loader: 'file?prefix=font/'
      },
      {
        test: /\.svg$/,
        loader: 'file?prefix=font/'
      }
    ],
    noParse: [
      path.join(bowerRoot, '/angular'),
      path.join(bowerRoot, '/angular-route'),
      path.join(bowerRoot, '/angular-ui-router'),
      path.join(bowerRoot, '/angular-mocks'),
      path.join(bowerRoot, '/jquery')
    ]
  },
  resolve: {
    alias: {
      bower: bowerRoot
    },
    extensions: ['', '.js', '.scss', '.css'],
    root: appRoot
  },
  plugins: [
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin
        .DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ], ['normal', 'loader']),
    new webpack.ContextReplacementPlugin(/.*$/, /a^/),
    new webpack.ProvidePlugin({
      'angular': 'exports?window.angular!bower/angular'
    }),
    new ngAnnotatePlugin({
      add: true
    });
  ],
  devtool: 'eval'
};
