import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import DiagnosisHistory from "./components/DiagnosisHistory/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosticList/DiagnosticList";
import PatientInfo from "./components/PatientInfo/PatientInfo";
import LabResults from "./components/LabResults/LabResults";

import { getDashboardData } from "./services/api";

function App() {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setLoading(true);

        const data = await getDashboardData();

        setPatients(data.patients);
        setSelectedPatient(data.selectedPatient);
      } catch (err) {
        setError(err.message || "Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        {error}
      </div>
    );
  }

  return (
    <div className="app">

      <Header />

      <div className="dashboard">

        {/* Left Sidebar */}
        <Sidebar patients={patients} />

        {/* Middle Section */}
        <div className="middle-section">

          <DiagnosisHistory patient={selectedPatient} />

          <DiagnosticList patient={selectedPatient} />

        </div>

        {/* Right Section */}
        <div className="right-section">

          <PatientInfo patient={selectedPatient} />

          <LabResults patient={selectedPatient} />

        </div>

      </div>

    </div>
  );
}

export default App;