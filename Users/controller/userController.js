const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const user = req.body;
    const userCreated = await User.create(user);
    return res.status(201).json({
      status: 'Success',
      data: userCreated,
    });
  } catch (err) {
    return res.status(500).json({
      status: 'False',
      error: err,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(201).json({
      status: 'Success',
      data: users,
    });
  } catch (err) {
    return res.status(500).json({
      status: 'False',
      error: err,
    });
  }
};

