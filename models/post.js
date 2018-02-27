const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = { Post };
