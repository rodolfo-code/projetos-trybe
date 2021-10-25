const express = require('express');

const User = require('../controllers/userController');
const auth = require('../middlewares/auth');
const { validateUser } = require('../middlewares/validateCreateUser');

const router = express.Router();

router.post('/', validateUser, User.create);
router.get('/', auth, User.getAllUsers);
router.get('/:id', auth, User.getUserById);

module.exports = router;