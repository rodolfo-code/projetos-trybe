const express = require('express');

const validateLogin = require('../middlewares/validateLogin');
const Login = require('../controllers/loginController');

const router = express.Router();

router.post('/', validateLogin, Login.userLogin);

module.exports = router;