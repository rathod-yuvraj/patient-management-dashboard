import "./PatientInfo.css";
import {
  FaCalendarAlt,
  FaFemale,
  FaPhoneAlt,
  FaShieldAlt
} from "react-icons/fa";

function PatientInfo({ patient }) {
  return (
    <div className="patient-info-card">

      <img
        src={patient?.profile_picture}
        alt={patient?.name}
        className="patient-profile"
      />

      <h2 className="patient-name">
        {patient?.name}
      </h2>

      <div className="info-list">

        <div className="info-row">
          <div className="info-icon">
            <FaCalendarAlt />
          </div>

          <div className="info-content">
            <span className="info-label">
              Date Of Birth
            </span>
<br></br>
            <span className="info-value">
              {patient?.date_of_birth}
            </span>
          </div>
        </div>


        <div className="info-row">
          <div className="info-icon">
            <FaFemale />
          </div>

          <div className="info-content">
            <span className="info-label">
              Gender
            </span> <br></br>

            <span className="info-value">
              {patient?.gender}
            </span>
          </div>
        </div>


        <div className="info-row">
          <div className="info-icon">
            <FaPhoneAlt />
          </div>

          <div className="info-content">
            <span className="info-label">
              Contact Info
            </span>
<br></br>
            <span className="info-value">
              {patient?.phone_number}
            </span>
          </div>
        </div>


        <div className="info-row">
          <div className="info-icon">
            <FaPhoneAlt />
          </div><br></br>

          <div className="info-content">
            <span className="info-label">
              Emergency Contacts
            </span> <br></br>

            <span className="info-value">
              {patient?.emergency_contact}
            </span>
          </div>
        </div>


        <div className="info-row">
          <div className="info-icon">
            <FaShieldAlt />
          </div>

          <div className="info-content">
            <span className="info-label">
              Insurance Provider
            </span> <br></br>

            <span className="info-value">
              {patient?.insurance_type}
            </span>
          </div>
        </div>

      </div>

      <button className="show-btn">
        Show All Information
      </button>

    </div>
  );
}

export default PatientInfo;