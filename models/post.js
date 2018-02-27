const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = { Post };
