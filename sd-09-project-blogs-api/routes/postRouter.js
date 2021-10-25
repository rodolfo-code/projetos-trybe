const express = require('express');

const PostsController = require('../controllers/postsController');
const auth = require('../middlewares/auth');
const validPost = require('../middlewares/validPost');
const verifyCategory = require('../middlewares/verifyCategory');

const router = express.Router();

router.post('/', validPost, verifyCategory, auth, PostsController.create);

module.exports = router;