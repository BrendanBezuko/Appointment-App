const express = require("express");
const app = express();
const clinicianRoutes = require("./routes/clinicianRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const patientRoutes = require("./routes/patientRoutes");
const cors = require("cors");

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/clinicians", clinicianRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/patients", patientRoutes);

module.exports = app;
