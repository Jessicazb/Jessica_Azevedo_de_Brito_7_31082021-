//const mongoose = require('mongoose');

const postSchema = /*mongoose.Schema*/({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String },
  likes: { type: Number, default: 0 },
  // comments 
  comments: { type: [String] },
  usersLiked: { type: [String] },
});

module.exports = 'Post', postSchema;