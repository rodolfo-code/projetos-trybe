const rescue = require('express-rescue');
const path = require('path');

const Service = require('../services/RecipesService');
const { CREATE, OK } = require('../middleware/httpStatus');

const createRecipe = rescue(async (req, res, next) => {
  const { name, ingredients, preparation } = req.body;
  const { userId } = req.user;
  
  const recipe = await Service.createRecipe({ name, ingredients, preparation, userId });
  if (recipe.error) {
    return next(recipe.error);
  }
  res.status(CREATE).json(recipe);
});

const findAll = rescue(async (_req, res) => {
  const recipes = await Service.findAll();
  res.json(recipes);
});

const findRecipe = rescue(async (req, res, next) => {
  const { id } = req.params;
  const recipe = await Service.findRecipe(id);

  if (recipe.error) {
    return next(recipe.error);
  }

  res.status(OK).json(recipe);
});

const updateOne = rescue(async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.user;
  const newRecipe = req.body;
  const recipe = await Service.updateOne(id, newRecipe, userId);

  if (recipe.error) {
    return next(recipe.error);
  }

  res.status(OK).json(recipe);
});

const deleteOne = rescue(async (req, res, _next) => {
  const { id } = req.params;

  await Service.deleteOne(id);

  res.status(204).end();
});

const uploadImg = rescue(async (req, res, next) => {
  const { id } = req.params;

  const { filename } = req.file;

  const image = await Service.uploadImg(id, filename);

  if (image.message) return next(image);

  return res.status(OK).json(image);
});

const getImage = rescue(async (req, res) => {
  const { id } = req.params;

  const image = path.resolve(__dirname, '..', '..', 'uploads', id);

  return res.status(OK).sendFile(image);
});

module.exports = {
  createRecipe,
  findAll,
  findRecipe,
  updateOne,
  deleteOne,
  uploadImg,
  getImage,
};
