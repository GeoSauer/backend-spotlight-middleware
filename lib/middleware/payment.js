module.exports = (req, res, next) => {
  const err = new Error('Payment');
  err.status = 402;
  next(err);
};
