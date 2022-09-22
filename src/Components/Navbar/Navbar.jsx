import { Link } from "react-router-dom";
import lookyLogo from "../../assets/lookylogodarkalt.svg";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="nav-wrapper">
        <div className="left">
          <Link to="/">
            <img src={lookyLogo} alt="" style={{ height: "50px" }} />
          </Link>
        </div>
        <div className="middle"></div>
        <div className="right">
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/contact">
            <button className="outline">Contact</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
