const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");
const { validatePatient } = require("../validators/patientValidator");
const { validateID } = require("../validators/idValidator");
const { validationResult } = require("express-validator");

router.get("/", patientController.getAllPatients);

router.get("/:id", [], (req, res) => {
  patientController.getPatient(req, res);
});

router.post("/", validatePatient, (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  patientController.createPatient(req, res);
});

router.delete("/", validateID, (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  patientController.deletePatient(req, res);
});

router.put("/", validatePatient, validateID, (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  patientController.updatePatient(req, res);
});

module.exports = router;
