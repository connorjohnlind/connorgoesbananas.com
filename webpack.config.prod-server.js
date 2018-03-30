const path = require('path');
const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',

  entry: './src/server.js',

  output: {
    filename: 'server-bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  target: 'node',

  mode: "production",

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  externals: [webpackNodeExternals()],

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    })
  ],
};
