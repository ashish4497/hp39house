import "./style.css";
import banner from "../../assets/bg1.jpeg";
import { FaCouch } from "react-icons/fa";
import { PiSwimmingPoolBold } from "react-icons/pi";
import { MdOutlineLight } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { phoneNumber, message } from "../../constants";

const BannerSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <div className="hero-images">
          <div className="main-image">
            <img src={banner} alt="Main Room" />
            <div className="floating-card">
              <FaCouch size={36} color="#caa577" />
              <h3>Luxury Room</h3>
              <p>
                Experience comfort and peace at our cozy homestay in
                Dharamshala, Himachal Pradesh. Enjoy breathtaking mountain views
                and warm hospitality in every corner.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <h4 className="subtitle">HOEXR LUXURY Homestay</h4>
        <h1 className="headline">Most Safe & Rated Homestay in Dharamshala.</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor
          incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
          ultrices gravida. Risus commodo maecenas accumsan lacus vel facilisis.
        </p>
        <div className="hero-features">
          <div className="feature">
            <MdOutlineLight size={36} color="lightgray" />
            <span>The Best Lighting</span>
          </div>
          <div className="feature">
            <PiSwimmingPoolBold size={36} color="lightgray" />
            <span>Relax with the Best Mountain-View</span>
          </div>
        </div>
        <div className="hero-cta">
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn booking">Book Now</button>
          </a>

          <div className="booking-info">
            <FiPhoneCall size={28} color="#caa577" />
            <div>
              <p>Call Us</p>
              <strong>956 220 6666</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
