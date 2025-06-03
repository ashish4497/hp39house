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
          description="A serene and spiritual center located in McLeod Ganj, the Dalai Lama Temple is the residence of His Holiness the 14th Dalai Lama. Visitors can witness peaceful Tibetan rituals, prayer wheels, and scenic views of the mountains."
          image={Temple}
        />
        <FacilityCard
          title="Himachal Pradesh Cricket Association Stadium"
          subtitle="Stadium"
          description="One of the most beautiful cricket stadiums in the world, this venue offers a stunning backdrop of the Dhauladhar range. Perfect for cricket fans and photography lovers alike."
          image={Stadium}
          reverse
        />
        <FacilityCard
          title="Church of St. John in the Wilderness"
          subtitle="Church"
          description="Tucked away in the pine forest, this neo-Gothic Anglican church built in 1852 is known for its peaceful ambiance, stained-glass windows, and historical charm."
          image={Curch}
        />
        <FacilityCard
          title="Bhagsu Nag Temple"
          subtitle="Temple"
          description="Dedicated to Lord Shiva, Bhagsu Nag Temple is a sacred spot for both locals and tourists. A short trek from here leads you to the famous Bhagsu Waterfall — a must-visit for nature lovers."
          image={BhagsuTemple}
          reverse
        />
      </div>
    </>
  );
};

export default FacilitySection;
