const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  mobile: {
    type: Number,
    unique: true,
  },
  completedTasks: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('User', userSchema);
