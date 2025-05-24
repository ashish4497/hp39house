import "./style.css";
import Facilities from "../Facilities";
import FacilitySection from "../../Pages/FacilitySection";
import RoomsGrid from "../RoomsGrid";
import BannerSection from "../BannerSection";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <p className="sub-title">Unique Place and Luxary Hotel</p>
        <h1 className="title">Life enjoy with movements</h1>
        <button className="btn">Rooms & suits</button>
      </div>
      <BannerSection />
      <Facilities />
      <RoomsGrid />
      <FacilitySection />
    </>
  );
}
