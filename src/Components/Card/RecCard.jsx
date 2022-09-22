import React from "react";
import RecommendedData from "./RecommendedData";
import { Link } from "react-router-dom";

import "./Card.scss";

const RecCard = () => {
  return (
    <>
      {RecommendedData.map((data) => {
        return (
          <div className="rec-card-wrapper">
            <div className="rec-left">
              <img src={data.thumbnail} alt="" />
            </div>
            <div className="rec-right">
              <h1>{data.title}</h1>
              <p>{data.author}</p>
              <p>{data.description}</p>
              <div className="btn-container">
                <a href={data.link} rel="noreferrer" target="_blank">
                  <button>read more</button>
                </a>
                <a href={data.link} rel="noreferrer" target="_blank">
                  <button className="outline">order online</button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RecCard;
