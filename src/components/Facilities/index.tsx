import "./style.css";
import {
  FaConciergeBell,
  FaShuttleVan,
  FaWifi,
  FaCoffee,
  FaSwimmingPool,
  FaCar,
} from "react-icons/fa";

const facilities = [
  { icon: <FaConciergeBell />, title: "Room Service" },
  { icon: <FaShuttleVan />, title: "Pick Up & Drop" },
  { icon: <FaWifi />, title: "Fibre Internet" },
  { icon: <FaCoffee />, title: "Breakfast" },
  { icon: <FaSwimmingPool />, title: "Swimming Pool" },
  { icon: <FaCar />, title: "Parking Space" },
];

const Facilities = () => {
  return (
    <section className="facilities-section">
      <div className="facilities-header">
        <p className="subtitle">HOEXR SERVICES</p>
        <h2 className="title">Hotel Facilities</h2>
      </div>

      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-card">
            <div className="icon">{facility.icon}</div>
            <h3>{facility.title}</h3>
            <p>
              Orci varius natoque penatibus magnis ders disney parturient
              ridiculus
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
