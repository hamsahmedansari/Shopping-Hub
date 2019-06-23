import React from "react";

const DiscountArea = () => {
  return (
    <div className="discount-area pb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-6">
            <div className="discount-img">
              <a href="#">
                <img
                  src="assets/images/banner/banner-1.jpg"
                  alt="discount-img"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-6">
            <div className="discount-content">
              <p>
                Lorem Ipsum is simply dummy text of the <br />
                printing and typesetting industry.
              </p>
              <h2>
                Winter Discount <br />
                Up to 30%
              </h2>
              <p className="bright-color">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className="discount-btn default-btn btn-hover">
                <a
                  className="btn-color-theme btn-size-md btn-style-outline"
                  href="product-details.html"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountArea;
