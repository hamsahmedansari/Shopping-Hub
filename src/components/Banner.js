import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-area pt-100 pb-100">
      <div className="container">
        <div
          className="bg-img pt-100 pb-100 learn-banner"
          style={{ backgroundImage: "url(assets/images/bg/banner-bg-1.jpg)" }}
        >
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-11">
              <div className="banner-content">
                <h2>
                  Premium Home <br />
                  Decorator
                </h2>
                <Link to="/product">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
