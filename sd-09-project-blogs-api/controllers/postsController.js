const PostService = require('../services/postService');

const create = async (req, res, _next) => {
  const { title, content, categoryIds } = req.body;
  const { id } = req.user;

  const post = await PostService.create(title, content, id, categoryIds);

  return res.status(201).json(post);
};

module.exports = { create };