import { useState, useEffect } from "react";
//import './App.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [startDate, setStartDate] = useState("");
  const [range, setRange] = useState([null, null]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/appointments", {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const results = await response.json();
        setAppointments(results.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex items-center justify-center flex-col p-4">
      <h1 className="text-2xl mb-4">Appointments:</h1>
      <DatePicker
        className="text-xs"
        selected={startDate}
        onChange={(date) => {
          setRange(date);
        }}
        showTimeSelect
        dateFormat="yyyy-MM-dd"
        selectsRange
        placeholderText="Select a Date and Time"
        startDate={range[0]}
        endDate={range[1]}
      />
      <ul className="space-y-2">
        {appointments
          .filter((appointment) => {
            const appointmentDate = new Date(appointment.appointmentDate);
            if (range[0] && range[1]) {
              return (
                appointmentDate >= new Date(range[0]) &&
                appointmentDate <= new Date(range[1])
              );
            } else {
              return true;
            }
          })
          .map((appointment) => (
            <li
              key={appointment.id}
              className="flex items-center justify-center p-2 bg-gray-50 rounded-md shadow-sm hover:bg-gray-100 transition duration-300"
            >
              <p
                className={`${
                  appointment.appointmentComplete
                    ? "text-red-800 done px-4"
                    : "text-green-500 px-4"
                }`}
              >
                {appointment.appointmentDate}
              </p>
              <p className="px-4">Patient Name: {appointment.patientName}</p>
              <p className="px-4">
                Appointment Status:{" "}
                {appointment.appointmentComplete ? "Completed" : "Incomplete"}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
