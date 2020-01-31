const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push(err.msg));

  return res.status(422).json({
    status: 422,
    messages: extractedErrors,
  });
}

module.exports = {
  validate
}