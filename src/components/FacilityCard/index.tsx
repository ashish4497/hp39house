// src/components/FacilityCard/index.tsx
import React from "react";
import "./style.css";

// 1. Define Prop Types
interface FacilityCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string; // If using import for image: string; (can also be JSX.Element)
  reverse?: boolean;
}

// 2. Add type annotation for props
const FacilityCard: React.FC<FacilityCardProps> = ({
  title,
  subtitle,
  description,
  image,
  reverse = false, // default to false
}) => {
  return (
    <>
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
    </>
  );
};

export default FacilityCard;
