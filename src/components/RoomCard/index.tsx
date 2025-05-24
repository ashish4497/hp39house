// src/components/RoomCard/index.tsx
import React from "react";
import "./style.css";

// 1. Define the props interface
interface RoomCardProps {
  title: string;
  price: string;
  image: string;
  hasButton?: boolean;
  icons?: string[];
}

// 2. Add types + default values for optional props
const RoomCard: React.FC<RoomCardProps> = ({
  title,
  price,
  image,
  hasButton = false,
  icons = [],
}) => {
  return (
    <div
      className={`room-card ${hasButton ? "hover-enabled" : ""}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="room-overlay">
        {hasButton && <button className="room-button">Book Now</button>}
        <div className="room-info">
          <h3>{title}</h3>
          <p>{price}</p>
          {icons.length > 0 && (
            <div className="room-icons">
              {icons.map((icon: string, index: number) => (
                <img key={index} src={icon} alt="icon" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
