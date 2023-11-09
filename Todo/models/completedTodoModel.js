const mongoose = require('mongoose');
const completedTodoSchema = new mongoose.Schema({
  todoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Todo',
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('CompletedTodo', completedTodoSchema);
