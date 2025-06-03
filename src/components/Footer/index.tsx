import logo from "../../assets/logo.jpg";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <img src={logo} alt="Hotel Logo" className="footer-logo" />
          <p className="footer-text">
            Welcome to the best homestay in Dharamshala, Himachal Pradesh — your
            cozy retreat with comfort, charm, and stunning mountain views.
          </p>
        </div>

        {/* Column 2 - Service Links */}
        <div className="footer-column">
          <h3>Social Media Links</h3>
          <div className="social-icons">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-linkedin-in" />
            <i className="fab fa-youtube" />
          </div>
        </div>

        {/* Column 3 - Information */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li>
              📞 1800-121-3637
              <br />
              +91-7052-101-786
            </li>
            <li>📧 info@example.com</li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div className="footer-column">
          <h3>Address</h3>
          <p>Dharamshala Himachal Pardesh (176215)</p>
          <div className="terms">
            <i className="fas fa-check-circle" />
            <span>I agree to all terms and policies</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Copyrights reserved by Thehp39house</p>
        <button className="back-to-top">
          <i className="fas fa-chevron-up" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
