const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    client: [
      './src/client/client.jsx',
    ]
  },

  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  mode: "production",

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },

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
