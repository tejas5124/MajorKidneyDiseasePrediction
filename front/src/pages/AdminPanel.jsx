import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/AdminPanel.css";

const AdminPanel = () => {
  const [patients, setPatients] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/admin/patients").then((res) => setPatients(res.data));
    axios.get("http://localhost:5000/admin/hospitals").then((res) => setHospitals(res.data));
  }, []);

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>

      <h3>Patients</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Result</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p, idx) => (
            <tr key={idx}>
              <td>{p.name}</td>
              <td>{p.location}</td>
              <td>{p.result}</td>
              <td>{p.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Hospitals</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Specialization</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((h, idx) => (
            <tr key={idx}>
              <td>{h.name}</td>
              <td>{h.address}</td>
              <td>{h.specialization}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
