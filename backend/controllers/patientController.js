const Patient = require("../models/patientModel");

exports.getAllPatients = (req, res) => {
  Patient.getAll(function (err, rows) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({ data: rows });
    }
  });
};

exports.getPatient = (req, res) => {
  const id = req.params.id;
  Patient.get(id, function (err, data) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({ data: data });
    }
  });
};

exports.createPatient = (req, res) => {
  const { name, dob, contact } = req.body;

  Patient.create(name, dob, contact, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({ message: "Patient created successfully", id: this.lastID });
    }
  });
};

exports.deletePatient = (req, res) => {
  const { id } = req.body;

  Patient.delete(id, function (err, changes) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (changes == 0) {
      res.status(404).json({
        message: "No patient found wiht provided ID",
      });
    } else {
      res.json({ message: "Patient deleted successfully" });
    }
  });
};

exports.updatePatient = (req, res) => {
  const { id, name, dob, contact } = req.body;

  Patient.update(id, name, dob, contact, function (err, changes) {
    if (err) {
      res.status(400).json({ error: err.message, issuse: "here" });
    } else {
      res.json({ message: "Patient updated successsfully" });
    }
  });
};
