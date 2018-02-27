require('./config/config');

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
// const { ObjectID } = require('mongodb');
require('./db/mongoose');
const { Post } = require('./models/post');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json()); // to send json to server

hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.set('view engine', 'hbs');

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

app.post('/api/post', (req, res) => {
  const post = new Post({
    text: req.body.text,
  });

  post.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
