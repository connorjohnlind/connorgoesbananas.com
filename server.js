require('./config/config');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const he = require('he');
// const { ObjectID } = require('mongodb');

// MongoDB
require('./db/mongoose');
const { Post } = require('./models/post');

// Express
const app = express();
const port = process.env.PORT;

// Handlebars Config
const helpers = require('./lib/helpers');

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers,
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/client/dist')));

// Blog Routes

app.get('/', async (req, res) => {
  const posts = await Post.find({}).sort('-datePosted').limit(4);
  res.render('home', {
    featured: posts[0],
    recent: posts.slice(1, 4),
    title: 'Home',
  });
});

app.get('/:year/:month/:day/:urlTitle', async (req, res) => {
  const { urlTitle } = req.params;

  try {
    const post = await Post.findOne({ urlTitle });
    res.render('post', {
      title: post.title,
      html: he.decode(post.html),
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

// CMS Routes

app.post('/api/post', async (req, res) => {
  const { title, html, urlTitle } = req.body;
  const post = new Post({
    title,
    urlTitle,
    html: he.encode(html),
    datePosted: Date.now(),
    lastModified: Date.now(),
  });

  try {
    await post.save();
    res.send(post);
  } catch (e) {
    res.status(400).send(e);
  }
});


app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
