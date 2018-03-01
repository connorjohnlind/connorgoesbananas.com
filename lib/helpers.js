const he = require('he');
const format = require('date-fns/format');

module.exports.format = date => (
  date ? format(date, 'MMMM Do, YYYY') : null
);

module.exports.decode = html => (
  html ? he.decode(html) : null
);
