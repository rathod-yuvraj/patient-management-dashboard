import "./LabResults.css";
import { FiDownload } from "react-icons/fi";

function LabResults({ patient }) {
  return (
    <div className="lab-results">

      <h2>Lab Results</h2>

      <div className="lab-list">

        {patient?.lab_results?.map((result, index) => (

          <div
            className="lab-item"
            key={index}
          >

            <span className="lab-name">
              {result}
            </span>

            <FiDownload className="download-icon" />

          </div>

        ))}

      </div>

    </div>
  );
}

export default LabResults;