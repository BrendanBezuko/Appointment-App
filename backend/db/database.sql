CREATE TABLE clinicians (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    npiNumber TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE patients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    dob DATE,
    contactInfo TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE appointments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    clinicianId INTEGER NOT NULL,
    patientId INTEGER NOT NULL,
    appointmentDate DATETIME NOT NULL,
    appointmentComplete BOOLEAN DEFAULT false,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO clinicians (npiNumber, name ) VALUES
('1285363051', 'Dr. John Doe'),
('9876543210', 'Dr. Jane Smith'),
('4567891234', 'Dr. Emily White');

INSERT INTO patients (name, dob, contactInfo) VALUES
('Alice Johnson', '1990-05-15', 'alice.johnson@example.com'),
('Bob Williams', '1985-02-20', 'bob.williams@example.com'),
('Charlie Brown', '2000-08-10', 'charlie.brown@example.com');

INSERT INTO appointments (clinicianId, patientId, appointmentDate) VALUES
(1, 1, '2024-06-20 10:00'),
(2, 2, '2024-06-21 11:30'),
(3, 3, '2024-06-22 14:00'),
(1, 2, '2024-06-23 09:00'),
(2, 1, '2024-06-24 13:00');

INSERT INTO appointments (clinicianId, patientId, appointmentDate, appointmentComplete) VALUES
(2, 2, '2024-06-28 11:30', true);

