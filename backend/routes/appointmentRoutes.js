const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");
const { validateAppointment } = require("../validators/appointmentValidator");
const { validateID } = require("../validators/idValidator");
const { validationResult } = require("express-validator");

router.get("/", appointmentController.getAllAppointments);

router.post("/", validateAppointment, (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  appointmentController.createAppointment(req, res);
});

router.delete("/", validateID, (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  appointmentController.deleteAppointment(req, res);
});

router.put("/", validateAppointment, validateID, (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  appointmentController.updateAppointment(req, res);
});

router.patch("/incomplete", validateID, (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  appointmentController.markAppointmentIncomplete(req, res);
});

router.patch("/complete", validateID, (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  appointmentController.markAppointmentComplete(req, res);
});

module.exports = router;
