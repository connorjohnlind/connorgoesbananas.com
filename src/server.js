require('./config/config');

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressStaticGzip = require('express-static-gzip');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

// devServer (catch all)
require('./config/devServer')(app);

// production (catch all)
if (process.env.NODE_ENV === 'production') {
  app.use(expressStaticGzip(path.resolve(__dirname, '..', 'dist'), {
    enableBrotli: true,
  }));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
  });
}

// Start
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port} in ${process.env.NODE_ENV}`);
});
