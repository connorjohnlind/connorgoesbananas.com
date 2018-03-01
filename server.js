require('./config/config');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
// const { ObjectID } = require('mongodb');

require('./db/mongoose');
const { Post } = require('./models/post');

const app = express();
const port = process.env.PORT;

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, '/client/views/layouts'),
  partialsDir: path.join(__dirname, '/client/views/partials'),
});

app.set('views', path.join(__dirname, '/client/views'));
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home',
  });
});

app.get('/post', (req, res) => {
  res.render('post', {
    title: 'Post',
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
