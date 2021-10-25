const jwt = require('jsonwebtoken');
const UserService = require('../services/userService');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const create = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;

  const user = await UserService.create(displayName, email, password, image);

  if (user.code) return next(user);

  const token = jwt.sign(user, process.env.JWT_SECRET, jwtConfig);

  return res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const users = await UserService.getAllUsers();

  return res.status(200).json(users);
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;

  const user = await UserService.getUserById(id);
  
  if (user.code) {
    return next(user);
  }

  return res.status(200).json(user);
};

module.exports = {
  create,
  getAllUsers,
  getUserById,
};