const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  mobile: {
    type: Number,
    unique: true,
  },
});

module.exports = mongoose.model('User', userSchema);
