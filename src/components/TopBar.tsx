import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="location">📍 1247/Plot No. 39, 15th Phase, USA</div>
      <div className="social">
        Follow Us :
        <i className="fab fa-facebook-f" />
        <i className="fab fa-twitter" />
        <i className="fab fa-linkedin-in" />
        <i className="fab fa-youtube" />
      </div>
    </div>
  );
};

export default TopBar;
