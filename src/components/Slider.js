import React from "react";

const Slider = props => {
  return (
    <div className="slider-area">
      <div className="slider-active owl-carousel nav-style-1 dot-style-1 nav-dot-left">
        <div
          className="single-slider height-100vh bg-img"
          data-dot="01"
          style={{ backgroundImage: "url(assets/images/slider/hm1-bg-1.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 col-12 col-sm-6">
                <div className="slider-sin-img-hm1 slider-sin-mrg1 slider-animated-1">
                  <img
                    className="animated"
                    src="assets/images/slider/hm1-single-1.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-12 col-sm-6">
                <div className="slider-content-1 slider-animated-1 ml-70">
                  <h3 className="animated">30% off</h3>
                  <h1 className="animated">Comfort Chair</h1>
                  <p className="animated">
                    Collect from Daxone & get 30% Discount.
                  </p>
                  <div className="slider-btn-1 default-btn btn-hover">
                    <a
                      className="animated btn-color-theme btn-size-md btn-style-outline"
                      href="product-details.html"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="single-slider height-100vh bg-img"
          data-dot="02"
          style={{ backgroundImage: "url(assets/images/slider/hm1-bg-1.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-6 col-12 col-sm-6">
                <div className="slider-sin-img-hm1 slider-sin-mrg1 slider-animated-1">
                  <img
                    className="animated"
                    src="assets/images/slider/hm1-single-2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-6 col-12 col-sm-6">
                <div className="slider-content-1 slider-animated-1 ml-70">
                  <h3 className="animated">30% off</h3>
                  <h1 className="animated">Comfort Chair</h1>
                  <p className="animated">
                    Collect from Daxone & get 30% Discount.
                  </p>
                  <div className="slider-btn-1 default-btn btn-hover">
                    <a
                      className="animated btn-color-theme btn-size-md btn-style-outline"
                      href="product-details.html"
                    >
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
