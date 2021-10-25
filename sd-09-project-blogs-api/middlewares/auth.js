const jwt = require('jsonwebtoken');
require('dotenv').config();

const { Users } = require('../models');

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next({ code: 401, message: 'Token not found' });
  }

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    const user = await Users.findOne({ where: { email: decode.email } });

    if (!user) {
      return next({ code: 401, message: 'Erro ao procurar usuário do token.' });
    }

    const { _id, password, ...dataWithOutPassword } = decode;

    req.user = { id: _id, ...dataWithOutPassword };

    next();
  } catch (err) {
    return next({ code: 401, message: 'Expired or invalid token' });
  }
};

// module.exports = auth;