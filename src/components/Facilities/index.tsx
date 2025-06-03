import "./style.css";
import {
  FaConciergeBell,
  FaShuttleVan,
  FaWifi,
  FaCoffee,
  FaCar,
  FaMountain,
} from "react-icons/fa";

const facilities = [
  { icon: <FaConciergeBell />, title: "Room Service" },
  { icon: <FaShuttleVan />, title: "Pick Up & Drop" },
  { icon: <FaWifi />, title: "Fibre Internet" },
  { icon: <FaCoffee />, title: "Breakfast" },
  { icon: <FaMountain />, title: "Mountain View" },
  { icon: <FaCar />, title: "Parking Space" },
];

const Facilities = () => {
  return (
    <section className="facilities-section">
      <div className="facilities-header">
        <p className="subtitle">Incredible Stays</p>
        <h2 className="title">HomeStay Facilities</h2>
      </div>

      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-card">
            <div className="icon">{facility.icon}</div>
            <h3>{facility.title}</h3>
            <p>
              Big on warmth, rich in tradition your perfect homestay in
              Himachal.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
