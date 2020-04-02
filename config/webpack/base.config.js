/* global process */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const styledComponentsTransformer = require('typescript-plugin-styled-components').default;

module.exports = {
  entry: {
    bundle: './src/index.tsx',
  },

  resolve: {
    mainFields: ['browser', 'main', 'module'],
    extensions: ['.js', '.json', '.ts', '.tsx'],
    modules: [
      path.resolve('./', 'src'),
      'node_modules',
    ],
    alias: {
      'assets': path.resolve('./', 'src', 'assets')
    }
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          name: 'app-common',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            getCustomTransformers: () => ({ before: [styledComponentsTransformer()] })
          }
        },
      },

      {
        test: /\.(jpe?g|gif|png|ico|gltf|woff2?|eot|otf|ttf)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[hash:6].[ext]',
          limit: 10000,
        },
      },

      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },

  output: {
    path: path.resolve('.', 'build'),
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new Dotenv(),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      test: /\.(js|css|html|jpe?g|gif|png|ico|gltf|svg|woff2?|eot|otf|ttf)$/,
      threshold: 10240,
      minRatio: 0.80,
      algorithm: 'gzip',
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true,
      hash: false
    }),
  ],
};
