const express = require("express");
const router = express.Router();
const clinicianController = require("../controllers/clinicianController");
const { validateClinician } = require("../validators/clinicianValidator");
const { validateID } = require("../validators/idValidator");
const { validationResult } = require("express-validator");

// Routes
router.get("/", clinicianController.getAllClinicians);

router.post("/", validateClinician, (req, res) => {
  const err = validationResult(req);

  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  clinicianController.createClinician(req, res);
});

router.delete("/", validateID, (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  clinicianController.deleteClinician(req, res);
});

router.put("/", validateClinician, validateID, (req, res) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    return res.status(400).json({ errors: err.array() });
  }
  clinicianController.updateClinician(req, res);
});

module.exports = router;
