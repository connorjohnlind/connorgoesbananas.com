const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
  },
  text: {
    type: String,
    required: true,
    minlength: 1,
  },
  datePosted: {
    type: Date,
    required: true,
  },
  lastModified: {
    type: Date,
    required: true,
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = { Post };
