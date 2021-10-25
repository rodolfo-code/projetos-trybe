module.exports = (err, _req, res, _next) => {
  const internalError = 500;

  if (err.isJoi) {
    return res.status(400)
      .json({ message: err.details[0].message });
  }

  const status = err.code || internalError;

  res.status(status).json({ message: err.message });
};
