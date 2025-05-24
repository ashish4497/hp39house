import './style.css';
import banner from '../../assets/banner01.jpg';
import { FaCouch, FaPlay } from 'react-icons/fa';
import { PiSwimmingPoolBold } from 'react-icons/pi';
import { MdOutlineLight } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';

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
              <p>Donec in quis the asd pellentesque velit. Donec id velit arcu posuere blane.</p>
            </div>
            <div className="play-button">
              <button>
                <FaPlay color="#fff" />
              </button>
            </div>
          </div>
          <div className="sub-image">
            <img src={banner} alt="Dining Area" />
          </div>
        </div>
      </div>

      <div className="hero-right">
        <h4 className="subtitle">HOEXR LUXURY HOTEL</h4>
        <h1 className="headline">Most Safe & Rated Hotel in London.</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore
          et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo maecenas
          accumsan lacus vel facilisis.
        </p>
        <div className="hero-features">
          <div className="feature">
            <MdOutlineLight size={36} color='lightgray'/>
            <span>The Best Lighting</span>
          </div>
          <div className="feature">
            <PiSwimmingPoolBold size={36} color='lightgray' />
            <span>The Best Swimming</span>
          </div>
        </div>
        <div className="hero-cta">
          <button className="discover-button">DISCOVER MORE</button>
          <div className="booking-info">
            <FiPhoneCall size={28} color="#caa577" />
            <div>
              <p>BOOKING NOW</p>
              <strong>956 220 6666</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
