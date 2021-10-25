const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string().required(),
  categoryIds: Joi.array().min(1).required(),
  content: Joi.string().required(),
});

module.exports = (req, _res, next) => {
  const { error } = postSchema.validate(req.body);

  if (error) return next(error);

  next();
};