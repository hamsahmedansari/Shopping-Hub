import React from "react";

const Welcome = () => {
  return (
    <div className="about-us-area pt-90 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="about-us-img text-center">
              <a href="#">
                <img src="assets/images/banner/about-us.jpg" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 align-self-center">
            <div className="about-us-content">
              <h2>
                Welcome To <span>Daxone</span> Store !
              </h2>
              <p className="peragraph-blog">
                Daxone Shop is a premium HTML template designed and develoved
                from the ground up with the sole purpose of helping you create
                an astonishing, the beautiful and user friendly website that
                will boost your product’s sales.
              </p>
              <p>
                The theme design package provides a complete Magento theme set
                for your online store according to your desired theme. This
                includes all Magento themes that are required for your online
                store's successful implementation.
              </p>
              <div className="about-us-btn btn-hover hover-border-none">
                <a
                  className="btn-color-white btn-color-theme-bg black-color"
                  href="shop.html"
                >
                  Shop now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
