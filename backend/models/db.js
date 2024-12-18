const sqlite3 = require("sqlite3");
const path = require("path");

const dbPath = path.resolve(__dirname, "../db/main.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Failed to connect to the database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

module.exports = db;
