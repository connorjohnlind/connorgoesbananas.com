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

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, '/client/views'));

app.use(bodyParser.json()); // to send json to server
app.use(express.static(path.join(__dirname, '/client')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about');
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
