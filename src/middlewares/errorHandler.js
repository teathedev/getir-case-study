module.exports = (err, req, res, next) => {
  console.error('Something wrong', err.stack);
  // sentryio integration
  res.status(500).json({
    code: 5,
    msg: 'Something wrong',
    results: []
  });
};
