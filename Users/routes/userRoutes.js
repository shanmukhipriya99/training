const userController = require('../controller/userController');
const express = require('express');
const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);

module.exports = router;
