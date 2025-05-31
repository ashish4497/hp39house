import { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaBars,
  FaTimes, // ✅ Added missing import
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleWhatsAppRedirect } from "../utils";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Top bar */}
      <div className="top-bar">
        <div className="location">
          <FaMapMarkerAlt className="icon" />
          <span>1247/Plot No. 39, 15th Phase, USA</span>
        </div>
        <div className="social">
          <span>Follow Us :</span>
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        {/* <img src={Logo} alt="Logo" className="logo" /> */}

        <div className={`nav-links-container ${menuOpen ? "open" : ""}`}>
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/rooms" onClick={() => setMenuOpen(false)}>
                Rooms
              </Link>
            </li>
          </ul>
          <button
            className="btn booking"
            onClick={() => handleWhatsAppRedirect()}
          >
            Book Now
          </button>
        </div>

        {/* ✅ Toggle Hamburger / Close Icon */}
        {menuOpen ? (
          <FaTimes
            className="menu-toggle"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          />
        ) : (
          <FaBars
            className="menu-toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          />
        )}
      </nav>
    </header>
  );
};

export default Header;
