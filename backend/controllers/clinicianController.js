const Clinician = require("../models/clinicianModel");
const { validateNpi } = require("../services/validateNpi");

exports.getAllClinicians = (req, res) => {
  Clinician.getAll(function (err, rows) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({ data: rows });
    }
  });
};

exports.createClinician = (req, res) => {
  const { npiNumber, name } = req.body;

  try {
    var npiRes = validateNpi(npiNumber);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }

  if (npiRes) {
  }

  Clinician.create(npiNumber, name, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({ message: "Clinician created successfully", id: this.lastID });
    }
  });
};

exports.deleteClinician = (req, res) => {
  const { id } = req.body;

  Clinician.delete(id, function (err, changes) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (changes == 0) {
      res
        .status(404)
        .json({ message: "No clinician found with the provided ID" });
    } else {
      res.json({ message: "Clinician deleted successfully" });
    }
  });
};

exports.updateClinician = (req, res) => {
  const { id, npiNumber, name } = req.body;

  Clinician.update(id, npiNumber, name, function (err, changes) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({ message: "Clinician updated successsfully" });
    }
  });
};
