
import "./DiagnosisHistory.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

import lungsIcon from "../../assets/respiratory.svg";
import tempIcon from "../../assets/temperature.svg";
import heartIcon from "../../assets/heartBPM.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function DiagnosisHistory({ patient }) {

  const history = [...(patient?.diagnosis_history || [])]
    .reverse()
    .slice(-6);

  const labels = history.map(
    item => `${item.month.slice(0,3)} ${item.year}`
  );

  const systolic = history.map(
    item => item.blood_pressure.systolic.value
  );

  const diastolic = history.map(
    item => item.blood_pressure.diastolic.value
  );

  const latest = patient?.diagnosis_history?.[0];

  const data = {
    labels,
    datasets: [
      {
        data: systolic,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        pointBackgroundColor: "#E66FD2",
        pointRadius: 4,
        tension: 0.4
      },
      {
        data: diastolic,
        borderColor: "#8B7CFF",
        backgroundColor: "#8B7CFF",
        pointBackgroundColor: "#8B7CFF",
        pointRadius: 4,
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false
      }
    },

    scales: {
      y: {
        min: 60,
        max: 180,

        ticks: {
          stepSize: 20
        },

        grid: {
          color: "#ddd"
        }
      },

      x: {
        grid: {
          display: false
        }
      }
    }
  };

  return (
    <div className="diagnosis-history">

      <h2>Diagnosis History</h2>

      <div className="chart-section">

        <div className="chart-left">

          <div className="chart-header">

            <h3>Blood Pressure</h3>

            <span>
              Last 6 months ▼
            </span>

          </div>

          <div className="chart-container">
            <Line
              data={data}
              options={options}
            />
          </div>

        </div>


        <div className="bp-summary">

          <div className="bp-card">

            <div className="bp-title pink">
              ● Systolic
            </div>

            <h1>
              {latest?.blood_pressure?.systolic?.value}
            </h1>

            <p>
              ▲ Higher than Average
            </p>

          </div>

          <hr />

          <div className="bp-card">

            <div className="bp-title purple">
              ● Diastolic
            </div>

            <h1>
              {latest?.blood_pressure?.diastolic?.value}
            </h1>

            <p>
              ▼ Lower than Average
            </p>

          </div>

        </div>

      </div>


      <div className="vital-grid">

        <div className="vital-card respiratory-card">

          <div className="icon-circle">
            <img
              src={lungsIcon}
              alt=""
              className="card-icon"
            />
          </div>

          <h4>Respiratory Rate</h4>

          <h1>
            {latest?.respiratory_rate?.value} bpm
          </h1>

          <p>
            {latest?.respiratory_rate?.levels}
          </p>

        </div>


        <div className="vital-card temperature-card">

          <div className="icon-circle">
            <img
              src={tempIcon}
              alt=""
              className="card-icon"
            />
          </div>

          <h4>Temperature</h4>

          <h1>
            {latest?.temperature?.value}°F
          </h1>

          <p>
            {latest?.temperature?.levels}
          </p>

        </div>


        <div className="vital-card heart-card">

          <div className="icon-circle">
            <img
              src={heartIcon}
              alt=""
              className="card-icon"
            />
          </div>

          <h4>Heart Rate</h4>

          <h1>
            {latest?.heart_rate?.value} bpm
          </h1>

          <p>
            {latest?.heart_rate?.levels}
          </p>

        </div>

      </div>

    </div>
  );
}

export default DiagnosisHistory;