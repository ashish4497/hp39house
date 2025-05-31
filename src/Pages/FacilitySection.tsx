import FacilityCard from "../components/FacilityCard";

import gymImage from "../assets/banner01.jpg";
import restaurantImage from "../assets/banner01.jpg";
import spaImage from "../assets/banner01.jpg";

const FacilitySection = () => {
  return (
    <>
      <div className="facilities-header">
        <h2 className="place-title">Places to Visit NearBy</h2>
      </div>

      <div className="facility-section">
        <FacilityCard
          title="Fitness Center"
          subtitle="Modern"
          description="Restaurant inlilla dui nam at elit finibus viverra nec a lacus themo the nesuada senectus muspiciunt non sagie the ferment ziverra tristique duru the ivite dianne onenn nivami acesstion augue artine."
          image={gymImage}
        />
        <FacilityCard
          title="The Restaurant"
          subtitle="Discover"
          description="Restaurant inlilla duiman at elit finibus viverra nec a lacus themo the nesuada senectus muspiciunt non sagie the ferment ziverra tristique duru the ivite dianne onenn nivami acesstion augue artine."
          image={restaurantImage}
          reverse
        />
        <FacilityCard
          title="Spa Center"
          subtitle="Experiences"
          description="Restaurant inlilla duiman at elit finibus viverra nec a lacus themo the nesuada senectus muspiciunt non sagie the ferment ziverra tristique duru the ivite dianne onenn nivami acesstion augue artine."
          image={spaImage}
          reverse={undefined}
        />
      </div>
    </>
  );
};

export default FacilitySection;
