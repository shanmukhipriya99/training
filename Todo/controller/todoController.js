const Todo = require('../models/todoModel');
const User = require('../models/userModel');
const CompletedTodo = require('../models/completedTodoModel');
const { default: mongoose } = require('mongoose');

exports.createTodo = async (req, res) => {
  try {
    const user = await User.findOne(req.query);
    const todo = {
      todo: req.body.todo,
      userId: user._id,
    };
    const todoCreated = await Todo.create(todo);
    return res.status(201).json({
      status: 'Success',
      data: todoCreated,
    });
  } catch (err) {
    return res.status(500).json({
      status: 'False',
      error: err,
    });
  }
};

exports.getTodos = async (req, res) => {
  try {
    let todos;
    if (req.query.mobile) {
      const user = await User.findOne(req.query);
      todos = await Todo.find({ userId: user._id });
    } else {
      todos = await Todo.find();
    }
    return res.status(200).json({
      status: 'Success',
      data: todos,
    });
  } catch (err) {
    return res.status(500).json({
      status: 'False',
      error: err,
    });
  }
};

exports.completedATodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.query.todo);
    const todoStatus = {
      completed: req.body.completed,
      todoId: todo._id,
    };
    const todoCompleted = await CompletedTodo.create(todoStatus);
    return res.status(201).json({
      status: 'Success',
      data: todoCompleted,
    });
  } catch (err) {
    return res.status(500).json({
      status: 'False',
      error: err,
    });
  }
};

exports.getCompletedTodos = async (req, res) => {
  try {
    const completedTodos = await CompletedTodo.find();
    return res.status(200).json({
      status: 'Success',
      data: completedTodos,
    });
  } catch (err) {
    return res.status(500).json({
      status: 'False',
      error: err,
    });
  }
};

exports.getUserTodos = async (req, res) => {
  try {
    const user = await User.findOne(req.params);
    const todos = await Todo.find({ userId: user._id });
    return res.status(200).json({
      status: 'Success',
      data: todos,
    });
  } catch (err) {
    return res.status(500).json({
      status: 'False',
      error: err,
    });
  }
};
