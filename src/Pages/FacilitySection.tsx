import FacilityCard from "../components/FacilityCard";

import Temple from "../assets/lambatemp.jpg";
import Curch from "../assets/curch.jpg";
import Stadium from "../assets/dstadium.jpg";
import BhagsuTemple from "../assets/bhaagsunag.webp";

const FacilitySection = () => {
  return (
    <>
      <div className="facilities-header">
        <h2 className="place-title">Places to Visit NearBy</h2>
      </div>

      <div className="facility-section">
        <FacilityCard
          title="Dalai Lama Temple"
          subtitle="Temple"
          description="Restaurant inlilla dui nam at elit finibus viverra nec a lacus themo the nesuada senectus muspiciunt non sagie the ferment ziverra tristique duru the ivite dianne onenn nivami acesstion augue artine. "
          image={Temple}
        />
        <FacilityCard
          title="Himachal Pradesh Cricket Association Stadium"
          subtitle="Stadium"
          description="Restaurant inlilla duiman at elit finibus viverra nec a lacus themo the nesuada senectus muspiciunt non sagie the ferment ziverra tristique duru the ivite dianne onenn nivami acesstion augue artine."
          image={Stadium}
          reverse
        />
        <FacilityCard
          title="Church of St. John in the Wilderness"
          subtitle="Church"
          description="Restaurant inlilla duiman at elit finibus viverra nec a lacus themo the nesuada senectus muspiciunt non sagie the ferment ziverra tristique duru the ivite dianne onenn nivami acesstion augue artine."
          image={Curch}
        />
        <FacilityCard
          title="Bhagsu Nag Temple"
          subtitle="Temple"
          description="Restaurant inlilla duiman at elit finibus viverra nec a lacus themo the nesuada senectus muspiciunt non sagie the ferment ziverra tristique duru the ivite dianne onenn nivami acesstion augue artine."
          image={BhagsuTemple}
          reverse
        />
      </div>
    </>
  );
};

export default FacilitySection;
