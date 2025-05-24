import "./style.css";

const FacilityCard = ({ title, subtitle, description, image, reverse }) => {
  console.log(title, subtitle, description, image, reverse);

  return (
    <div className={`facility-row ${reverse ? "reverse" : ""}`}>
      <div className="facility-image">
        <img src={image} alt={title} />
      </div>
      <div className="facility-content">
        <span className="subtitle">{subtitle}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="discover-btn">Discover More</button>
      </div>
    </div>
  );
};

export default FacilityCard;
