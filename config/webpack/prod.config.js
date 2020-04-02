const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash:6].js'
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true
      }),
    ],
  },

  plugins: [
    new webpack.DefinePlugin('production')
  ]

});