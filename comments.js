// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Create a comment model
const Comment = require('./models/comment');

// Middleware
app.use(bodyParser.json());

// Get all comments
app.get('/comments', (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(comments);
    }
  });
});

// Create a new comment
app.post('/comments', (req, res) => {
  const newComment = new Comment(req.body);
  newComment.save((err, comment) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json(comment);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

// Path: models/comment.js
// Create a model for comments
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;

// Path: index.js
// Connect to the database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/comments', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Path: package.json
{
    
}
