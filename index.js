const express = require('express');
const path = require('path');
const hbs = require('hbs');

const port = process.env.PORT || 5000;
const app = express();

hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.set('view engine', 'hbs');

// app.use((req, res, next) => {
//   const now = new Date().toString();
//   const log = `${now}: ${req.method} ${req.url}`;
//
//   console.log(log);
//   fs.appendFile('server.log', `${log} \n`);
//   next();
// });

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(path.join(__dirname, '/client')));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', text => text.toUpperCase());

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website',
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects',
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
