import "./Footer.scss";
import lookyLogo from "../../assets/lookylogodarkalt.svg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="top">
          <Link to="/">
            <img src={lookyLogo} alt="" style={{ height: "50px" }} />
          </Link>
        </div>
        <div className="middle">
          <div className="left">
            <h3>Navigation</h3>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
            </ul>
          </div>
          <div className="right">
            <h3>Contact</h3>
            <a mailto="davelpz15@gmail.com">davelpz15@gmail.com</a>
            <p>602-350-9341</p>
            <a href="https://davelpz-tech.github.io/portfolio-david/">Visit my Site</a>
          </div>
        </div>
        <div className="line"></div>
        <div className="bottom">
          <div className="left">
            <p>all rights reserved 2022</p>
          </div>
          <div className="right">
            <a href="/">privacy policy</a>
            <a href="/">site map</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
