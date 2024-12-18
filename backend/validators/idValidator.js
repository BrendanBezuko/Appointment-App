const { body } = require("express-validator");

exports.validateID = [body("id").isNumeric()];
