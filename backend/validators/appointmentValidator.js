const { body } = require("express-validator");

exports.validateAppointment = [
  body("clinicianId")
    .notEmpty()
    .isNumeric()
    .withMessage("ClinicianId must be numeric."),
  body("patientId")
    .notEmpty()
    .isNumeric()
    .withMessage("patientId must be numeric."),
  body("appointmentDate").notEmpty(),
];
