const Joi = require('joi');

const CategorySchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = (req, _res, next) => {
  const { error } = CategorySchema.validate(req.body);

  if (error) {
    return next(error);
  }

  next();
};