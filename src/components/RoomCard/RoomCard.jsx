import React from 'react';
import './style.css';

const RoomCard = ({ title, price, image, hasButton, icons }) => {
  return (
    <div
      className={`room-card ${hasButton ? 'hover-enabled' : ''}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="room-overlay">
        {hasButton && <button className="room-button">Book Now</button>}
        <div className="room-info">
          <h3>{title}</h3>
          <p>{price}</p>
          {icons && (
            <div className="room-icons">
              {icons.map((icon, index) => (
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
