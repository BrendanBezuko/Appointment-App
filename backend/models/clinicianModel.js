const db = require("./db");

const Clinician = {
  getAll: (callback) => {
    db.all("SELECT * FROM clinicians", [], callback);
  },
  create: (npiNumber, name, callback) => {
    const sql = "INSERT INTO clinicians (npiNumber, name ) VALUES (?, ? )";
    db.run(sql, [npiNumber, name], callback);
  },
  delete: (id, callback) => {
    const sql = "DELETE FROM clinicians WHERE id = ?";
    db.run(sql, [id], function (err) {
      callback(err, this.changes);
    });
  },
  update: (id, npiNumber, name, callback) => {
    const sql =
      "UPDATE clinicians SET npiNumber = ?, name = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?";
    db.run(sql, [npiNumber, name, id], callback);
  },
};

module.exports = Clinician;
