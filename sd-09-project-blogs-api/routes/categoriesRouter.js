const express = require('express');

const auth = require('../middlewares/auth');
const Categories = require('../controllers/categoriesController');
const validateCategory = require('../middlewares/validateCategory');

const router = express.Router();

router.post('/', auth, validateCategory, Categories.create);
router.get('/', auth, Categories.getAll);

module.exports = router;