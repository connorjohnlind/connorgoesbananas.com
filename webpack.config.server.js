const path = require('path');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: [
      'babel-runtime/regenerator',
      'babel-register',
      './src/server.js',
    ],
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'node',
  externals: nodeExternals(),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(scss|sass|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // resolve-url-loader may be chained before sass-loader if necessary
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: () => [
                  autoprefixer({
                    browsers: ['> 1%', 'last 2 versions'],
                  }),
                ],
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
      { test: /\.(png|jpe?g|gif|svg)$/, loader: 'url-loader?limit=8000&name=images/[name].[ext]' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
      { test: /\.(ico)$/, loader: 'file-loader?name=[name].[ext]' },
      { test: /\.html$/, loader: 'html-loader' },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // new BundleAnalyzerPlugin({
    //   generateStatsFile: true
    // })
  ],
};
