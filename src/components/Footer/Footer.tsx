import logo from "../../assets/react.svg";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1 - Logo + About + Social */}
        <div className="footer-column">
          <img src={logo} alt="Hotel Logo" className="footer-logo" />
          <p className="footer-text">
            Welcome to the best five-star deluxe hotel in New York. Hotel
            elementum sesue the aucan vestibulum aliquam justo in sapien rutrum
            volutpat.
          </p>
          <div className="social-icons">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-linkedin-in" />
            <i className="fab fa-youtube" />
          </div>
        </div>

        {/* Column 2 - Service Links */}
        <div className="footer-column">
          <h3>Services Links</h3>
          <ul>
            <li>🏵 Home</li>
            <li>🏵 Rooms & Suites</li>
            <li>🏵 Restaurant</li>
            <li>🏵 Spa & Wellness</li>
            <li>🏵 About Hotel</li>
            <li>🏵 Contact</li>
          </ul>
        </div>

        {/* Column 3 - Information */}
        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li>
              📞 1800-121-3637
              <br />
              +91-7052-101-786
            </li>
            <li>📧 info@example.com</li>
            <li>
              📍 1247/Plot No. 39, 15th Phase,
              <br />
              United States of America
            </li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Lorem ipsum dolor sit amet consectetur Augue id fermentum</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Email Address" />
            <button>
              <i className="fas fa-paper-plane" />
            </button>
          </div>
          <div className="terms">
            <i className="fas fa-check-circle" />
            <span>I agree to all terms and policies</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyrights reserved by kodesolution.com</p>
        <button className="back-to-top">
          <i className="fas fa-chevron-up" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
