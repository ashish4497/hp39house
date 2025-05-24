import React from 'react';
import FacilityCard from '../components/FacilityCard/FacilityCard';

import gymImage from '../assets/banner01.jpg';
import restaurantImage from '../assets/banner01.jpg';
import spaImage from '../assets/banner01.jpg';

const FacilitySection = () => {
  return (
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
      />
    </div>
  );
};

export default FacilitySection;
