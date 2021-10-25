const { Categories } = require('../models');

const create = async (name) => {
  const category = await Categories.findOne({ where: { name } });

  if (category) {
    return { 
      code: 404, 
      message: 'Categorie already registered' };
  }

  const { dataValues } = await Categories.create({ name });

  return dataValues;
};

const getAll = async () => {
  const categories = await Categories.findAll();

  return categories;
};

module.exports = {
  create,
  getAll,
};