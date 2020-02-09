const { validationResult } = require('express-validator');

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push(err.msg));

  return res.status(400).json({
    status: 400,
    messages: extractedErrors,
  });
}

module.exports = {
  validate
}