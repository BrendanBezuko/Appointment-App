const { getAll } = require("./clinicianModel");
const db = require("./db");

const Appointment = {
  getAll: (callback) => {
    db.all(
      `SELECT 
      a.id AS appointmentId,
      a.appointmentDate,
      a.appointmentComplete,
      c.name AS clinicianName,
      p.name AS patientName
      FROM 
      appointments a
      JOIN 
      clinicians c ON a.clinicianId = c.id
      JOIN 
      patients p ON a.patientId = p.id;
      `,
      [],
      callback
    );
  },
  create: (clinicianId, patientId, appointmentDate, callback) => {
    const sql =
      "INSERT INTO appointments (clinicianId, patientId, appointmentDate) VALUES (?,?,?)";
    db.run(sql, [clinicianId, patientId, appointmentDate], callback);
  },
  update: (id, clinicianId, patientId, appointmentDate, callback) => {
    const sql = `UPDATE appointments 
    SET clinicianId = ?, 
    patientId = ?, 
    appointmentDate = ?, 
    updatedAt = CURRENT_TIMESTAMP 
    WHERE id = ?`;
    db.run(sql, [clinicianId, patientId, appointmentDate, id], callback);
  },
  delete: (id, callback) => {
    const sql = "DELETE FROM appointments WHERE id = ?";
    db.run(sql, [id], function (err) {
      callback(err, this.changes);
    });
  },
  markComplete: (id, callback) => {
    const sql = `UPDATE appointments 
    SET appointmentComplete = true, 
    updatedAt = CURRENT_TIMESTAMP 
    WHERE id = ?`;
    db.run(sql, [id], callback);
  },
  markIncomplete: (id, callback) => {
    const sql = `UPDATE appointments 
    SET appointmentComplete = false, 
    updatedAt = CURRENT_TIMESTAMP 
    WHERE id = ?`;
    db.run(sql, [id], callback);
  },
};

module.exports = Appointment;
