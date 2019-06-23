import React from "react";

const Banner = () => {
  return (
    <div className="banner-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="banner-wrap mb-30">
              <a href="product-details.html">
                <img src="assets/images/banner/banner-12.png" alt="banner" />
              </a>
              <div className="banner-content-8">
                <h2>Best LED TV</h2>
                <h5>G432xx</h5>
                <h3>
                  <span>$</span>1990.00
                </h3>
                <h4>
                  0% <span>EMI </span> available
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="banner-wrap mb-30">
              <a href="product-details.html">
                <img src="assets/images/banner/banner-13.png" alt="banner" />
              </a>
              <div className="banner-content-9">
                <h3>
                  Beots <br />
                  Superb
                </h3>
                <p>Lorem Ipsum is simply dummy text</p>
                <a href="product-details.html">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="banner-wrap mb-30">
              <a href="product-details.html">
                <img src="assets/images/banner/banner-14.png" alt="banner" />
              </a>
              <div className="banner-content-9">
                <h1>Beots</h1>
                <h4>
                  Sup<span>erb</span>
                </h4>
                <p>Lorem Ipsum is simply dummy text</p>
                <a href="product-details.html">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
