const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = {
  entry: './src/client/client.jsx',

  output: {
    filename: 'client-bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  }
};

module.exports = merge(baseConfig, config);
