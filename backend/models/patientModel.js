const db = require("./db");

const Patient = {
  getAll: (callback) => {
    db.all("SELECT * FROM patients", [], callback);
  },
  get: (id, callback) => {
    db.all("SELECT * FROM patients WHERE id = ?", [id], callback);
  },
  create: (name, dob, contactInfo, callback) => {
    const sql = "INSERT INTO patients (name, dob, contactInfo) VALUES (?,?,?)";
    db.run(sql, [name, dob, contactInfo], callback);
  },
  delete: (id, callback) => {
    const sql = "DELETE FROM patients WHERE id = ?";
    db.run(sql, [id], function (err) {
      callback(err, this.changes);
    });
  },
  update: (id, name, dob, contactInfo, callback) => {
    const sql =
      "UPDATE patients SET name = ?, dob = ?, contactInfo = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?";
    db.run(sql, [name, dob, contactInfo, id], callback);
  },
};

module.exports = Patient;
