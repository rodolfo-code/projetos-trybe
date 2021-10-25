const { Users } = require('../models');

const create = async (displayName, email, password, image) => {
  const user = await Users.findOne({ where: { email } });

  if (user) {
    return { 
      code: 409, 
      message: 'User already registered', 
    };
  }

  const { dataValues } = await Users.create({ displayName, email, password, image });
  
  const { password: _, ...newUser } = dataValues;

  return newUser;
};

const getAllUsers = async () => {
  const users = await Users.findAll();

  return users;
};

const getUserById = async (id) => {
  const user = await Users.findOne({ where: { id } });

  if (!user) {
    return { code: 404, message: 'User does not exist' };
  }

  return user.dataValues;
};

module.exports = {
  create,
  getAllUsers,
  getUserById,
};