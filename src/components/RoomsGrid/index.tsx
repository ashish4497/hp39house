import "./style.css";
import { rooms, type Room } from "./roomsData";
import RoomCard from "../RoomCard";

const RoomsGrid = () => {
  return (
    <section className="rooms-section">
      <div className="heading">
        <span>The39 House Luxury Rooms</span>
        <h2>Luxury Rooms & Suites</h2>
      </div>
      <div className="rooms-grid">
        {rooms.map((room: Room, index: number) => (
          <RoomCard key={index} {...room} />
        ))}
      </div>
    </section>
  );
};

export default RoomsGrid;
