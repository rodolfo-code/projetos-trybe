const CategoriesService = require('../services/categoriesService');

const create = async (req, res, next) => {
  const { name } = req.body;

  const category = await CategoriesService.create(name);

  if (category.code) {
    return next(category);
  }

  return res.status(201).json(category);
};

const getAll = async (_req, res, _next) => {
  const categories = await CategoriesService.getAll();

  return res.status(200).json(categories);
};

module.exports = {
  create,
  getAll,
};