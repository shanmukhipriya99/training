const todoController = require('../controller/todoController');
const express = require('express');
const router = express.Router();

router.post('/', todoController.createTodo);
router.get('/', todoController.getTodos);
router.put('/completed', todoController.completedATodo);
router.get('/completed', todoController.getCompletedTodos);

module.exports = router;
