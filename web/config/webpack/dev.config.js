const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    filename: '[name].[hash:6].js'
  },

  devServer: {
    inline: true,
    hot: true,
    contentBase: 'public',
    port: '8800',
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },

  plugins: [
    new webpack.DefinePlugin('development'),
  ]
});
