module.exports = (req, res, next) => {
  const err = new Error('Teapot');
  err.status = 418;
  next(err);
};
