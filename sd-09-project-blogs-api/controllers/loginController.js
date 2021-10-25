const jwt = require('jsonwebtoken');
const LoginService = require('../services/loginService');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const userLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const login = await LoginService.loginUser(email, password);

  if (login.code) { 
    return next(login); 
}

  const token = jwt.sign(login, process.env.JWT_SECRET, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = {
  userLogin,
};