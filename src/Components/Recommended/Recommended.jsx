import React from "react";
import RecCard from "../Card/RecCard";

import "./Recommended.scss";

const Recommended = () => {
  return (
    <section className="recommended-wrapper">
      <h1>
        Here are some <span style={{ color: "#3ec281" }}>Books</span> I
        recommend...
      </h1>
      <div className="recommended-books-grid">
        <RecCard />
      </div>
    </section>
  );
};

export default Recommended;
