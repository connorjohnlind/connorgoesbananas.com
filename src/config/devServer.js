import path from 'path';

module.exports = (app) => {
  if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack'); // eslint-disable-line global-require
    const config = require('../../webpack.config.dev.js'); // eslint-disable-line global-require
    const compiler = webpack(config);

    const webpackDevMiddleware = require('webpack-dev-middleware')( // eslint-disable-line global-require
      compiler,
      config.devServer,
    );

    const webpackHotMiddlware = require('webpack-hot-middleware')( // eslint-disable-line global-require
      compiler,
      config.devServer,
    );

    app.use(webpackDevMiddleware);
    app.use(webpackHotMiddlware);

    console.log('Dev Server middleware enabled');
  }
};
