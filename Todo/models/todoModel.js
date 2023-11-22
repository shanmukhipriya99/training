const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  typeOfTask: {
    type: String,
    enum: ['Shopping', 'Bills'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Todo', todoSchema);
