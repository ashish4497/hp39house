import {
  // FaFacebookF,
  // FaTwitter,
  // FaLinkedinIn,
  // FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Logo from "../assets/TheHP39House-logo.jpg";
import { message, phoneNumber } from "../constants";

const Header = () => {
  return (
    <header className="header">
      {/* Top bar */}
      <div className="top-bar">
        <div className="location">
          <FaMapMarkerAlt className="icon" />
          <span>Dharamshala Himachal Pardesh (176215)</span>
        </div>
        <div className="social">
          <span>Contact Us:</span>
          <span>841587280</span>
        </div>
        {/* <div className="social">
          <span>Follow Us :</span>
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div> */}
      </div>

      <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo" />

        <div>
          <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn booking">Book Now</button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
