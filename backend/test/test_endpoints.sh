#!/bin/bash

BASE_URL="http://localhost:3000"

print_message() {
  echo -e "\n\033[1;32m$1\033[0m"
}

print_message "Testing Clinicians Routes..."

print_message "Creating a new clinician..."
curl -X POST "${BASE_URL}/clinicians" \
-H "Content-Type: application/json" \
-d '{"npiNumber": "1285363051", "name": "Brendan"}'

print_message "Retrieving all clinicians..."
curl -X GET "${BASE_URL}/clinicians"

print_message "Testing validation with invalid clinician data..."
curl -X POST "${BASE_URL}/clinicians" \
-H "Content-Type: application/json" \
-d '{"npiNumber": "1234", "name": "Bob"}'

print_message "Testing delete a clinician...."
curl -X DELETE "${BASE_URL}/clinicians" \
-H "Content-Type: application/json" \
-d '{"id": "4"}'

print_message "Retrieving all clinicians..."
curl -X GET "${BASE_URL}/clinicians"

print_message "Updating a clinician..."
curl -X PUT "${BASE_URL}/clinicians" \
-H "Content-Type: application/json" \
-d '{"id": "1", "npiNumber": "7777777777", "name": "Brendan"}'
print_message
print_message "Testing Appointments Routes..."
print_message

print_message "Creating a new appointment..."
curl -X POST "${BASE_URL}/appointments" \
-H "Content-Type: application/json" \
-d '{"clinicianId": "1", "patientId": "1", "appointmentDate": "2024-01-6 12:00"}'

# Retrieve all appointments
print_message "Retrieving all appointments..."
curl -X GET "${BASE_URL}/appointments"

print_message "Updating Appointment"
curl -X PUT "${BASE_URL}/appointments" \
-H "Content-Type: application/json" \
-d '{"id": "1","clinicianId": "7", "patientId": "7", "appointmentDate": "2024-01-6 12:00"}'

print_message "Delete Appointment"
curl -X DELETE "${BASE_URL}/appointments" \
-H "Content-Type: application/json" \
-d '{"id": "7"}'

print_message
print_message "Testing patient routes"
print_message

print_message "Creating a new patient..."
curl -X POST "${BASE_URL}/patients" \
-H "Content-Type: application/json" \
-d '{"name": "Brown", "dob": "1999-09-06 19:30", "contact": "brendan@gmail.com"}'

print_message "Retrieving all patients..."
curl -X GET "${BASE_URL}/patients"

print_message "Updating Patient..."
curl -X PUT "${BASE_URL}/patients" \
-H "Content-Type: application/json" \
-d '{"id": "13", "name": "Something", "dob": "2075-09-06 19:30", "contact": "brendan@gmail.com"}'

print_message "Deleting Patient..."
curl -X DELETE "${BASE_URL}/patients" \
-H "Content-Type: application/json" \
-d '{"id": "14"}'

print_message "Getting a single Patient..."
curl -X GET "${BASE_URL}/patients/3" \
-H "Content-Type: application.json"
