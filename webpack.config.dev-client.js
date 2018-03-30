const path = require('path');

module.exports = {
  entry: './src/client/client.jsx',

  output: {
    filename: 'client-bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
