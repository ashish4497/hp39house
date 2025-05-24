import "./style.css";
import { rooms } from "./roomsData";
import RoomCard from "../RoomCard";

const RoomsGrid = () => {
  return (
    <section className="rooms-section">
      <div className="heading">
        <span>Hoexr Luxury Rooms</span>
        <h2>Luxury Rooms & Suites</h2>
      </div>
      <div className="rooms-grid">
        {rooms.map((room, index) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </section>
  );
};

export default RoomsGrid;
