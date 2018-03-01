const he = require('he');

module.exports.decode = html => (
  html ? he.decode(html) : null
);
