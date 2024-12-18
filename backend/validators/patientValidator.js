const { body } = require("express-validator");

exports.validatePatient = [
  body("name").notEmpty().withMessage("Name is required."),
  body("dob").notEmpty().withMessage("Date of Birth is required."),
  body("contact").notEmpty().withMessage("Contact is required."),
];
