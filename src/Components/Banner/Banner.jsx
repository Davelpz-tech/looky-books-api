import React from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="banner-wrapper">
        <div className="left">
          <div className="title">
            <h3>welcome to</h3>
            <h1>
              L<span style={{ color: "#3ec281" }}>oo</span>ky Books API
            </h1>
          </div>
          <p>
            Your friend in the quest for knowledge <br></br> in the age of
            information
          </p>
          <div className="btn-container">
            <a href="https://davelpz-tech.github.io/portfolio-david/" target="_blank"><button>my portfolio</button></a>
            <Link to="../../assets/David_CV.pdf" target="_blank" download><button className="outline">download CV</button></Link>
          </div>
        </div>
        <img src="https://source.unsplash.com/v8DSLoY80Xk" alt="" />
        <div className="filter"></div>
      </div>
    </>
  );
};

export default Banner;