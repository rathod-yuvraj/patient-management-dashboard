import "./Sidebar.css";
import { FiSearch, FiMoreHorizontal } from "react-icons/fi";

function Sidebar({ patients }) {
  return (
    <div className="sidebar">

      <div className="sidebar-header">
        <h2>Patients</h2>
        <FiSearch className="search-icon" />
      </div>

      <div className="patient-list">

        {patients?.map((patient) => (
          <div
            key={patient.name}
            className={
              patient.name === "Jessica Taylor"
                ? "patient-card active"
                : "patient-card"
            }
          >

            <div className="patient-left">

              <img
                src={patient.profile_picture}
                alt={patient.name}
                className="patient-image"
              />

              <div className="patient-info">

                <h4>{patient.name}</h4>

                <p>
                  {patient.gender}, {patient.age}
                </p>

              </div>

            </div>

            <FiMoreHorizontal className="more-icon" />

          </div>
        ))}

      </div>

    </div>
  );
}

export default Sidebar;