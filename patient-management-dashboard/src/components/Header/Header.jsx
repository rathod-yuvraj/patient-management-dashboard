import "./Header.css";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <h2>Tech.Care</h2>
      </div>

      <div className="nav-menu">
        <span>Overview</span>
        <span className="active">Patients</span>
        <span>Schedule</span>
        <span>Message</span>
        <span>Transactions</span>
      </div>

      <div className="doctor-profile">
        <img
          src="https://fedskillstest.ct.digital/doctor.png"
          alt="Doctor"
        />

        <div>
          <h4>Dr. Jose Simmons</h4>
          <p>General Practitioner</p>
        </div>
      </div>

    </header>
  );
}

export default Header;