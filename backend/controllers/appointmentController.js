const Appointment = require("../models/appointmentModel");

exports.getAllAppointments = (req, res) => {
  Appointment.getAll(function (err, rows) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({ data: rows });
    }
  });
};

exports.createAppointment = (req, res) => {
  const { clinicianId, patientId, appointmentDate } = req.body;

  Appointment.create(clinicianId, patientId, appointmentDate, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({
        message: "Appointment created successfully",
        id: this.lastID,
      });
    }
  });
};

exports.deleteAppointment = (req, res) => {
  const { id } = req.body;
  Appointment.delete(id, function (err, changes) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (changes == 0) {
      res
        .status(404)
        .json({ message: "No appointment found wiht provided ID" });
    } else {
      res.json({ message: "Appointment deleted successfully" });
    }
  });
};

exports.updateAppointment = (req, res) => {
  const { id, clinicianId, patientId, appointmentDate } = req.body;
  Appointment.update(
    id,
    clinicianId,
    patientId,
    appointmentDate,
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ message: "Appointment updated successsfully" });
      }
    }
  );
};

exports.markAppointmentComplete = (req, res) => {
  const { id } = req.body;
  Appointment.markComplete(id, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({ message: "Appointment marked as complete successsfully" });
    }
  });
};

exports.markAppointmentIncomplete = (req, res) => {
  const { id } = req.body;
  Appointment.markIncomplete(id, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.json({ message: "Appointment marked as complete successsfully" });
    }
  });
};
