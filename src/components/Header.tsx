import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
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
        <img src="/logo.png" alt="Hoexr Logo" className="logo" />
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms & Suites</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="actions">
          <FaSearch className="icon" />
          <FaBars className="icon menu-icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
