const Joi = require('joi');

const validateUser = (req, _res, next) => {
  const minNameLength = 8;
  const passwordLength = 6;

  const { error } = Joi.object({
    displayName: Joi.string().min(minNameLength).required(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().length(passwordLength).required(),
    image: Joi.string(),
  }).validate(req.body);

  if (error) return next(error);

  next();
};

module.exports = {
  validateUser,
};