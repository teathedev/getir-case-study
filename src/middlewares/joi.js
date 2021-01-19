const joi = require('joi');


module.exports = (schema) => ((req, res, next) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    res.status(400).json(error);
  } else {
    req.body = value;
    next();
  }
});
