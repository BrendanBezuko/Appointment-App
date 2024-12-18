const { body } = require("express-validator");

exports.validateClinician = [
  body("npiNumber")
    .isNumeric()
    .withMessage("NPI Number must be numeric.")
    .isLength({ min: 10, max: 10 })
    .withMessage("NPI Number must be exactly 10 digits."),
  body("name").notEmpty().withMessage("Name is required."),
];
