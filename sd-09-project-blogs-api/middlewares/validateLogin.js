const Joi = require('joi');

const passwordLength = 6;

const loginSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  password: Joi.string().length(passwordLength).required(),
});

const validateLogin = (req, _res, next) => {
  const { error } = loginSchema.validate(req.body);

  if (error) return next(error);

  next();
};

module.exports = validateLogin;