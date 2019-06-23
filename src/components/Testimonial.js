import React from "react";

const Testimonial = () => {
  return (
    <div className="testimonial-area pt-60 pb-80">
      <div className="container">
        <div className="section-title-2 text-center">
          <h2>Testimonials</h2>
          <img src="assets/images/icon-img/title-shape.png" alt="icon-img" />
        </div>
        <div className="testimonial-active owl-carousel">
          <div className="sin-testimonial">
            <div className="client-content">
              <p>
                “ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, laboris consequat. ”
              </p>
            </div>
            <div className="client-info">
              <img alt="" src="assets/images/testimonial/client-1.png" />
              <h5>Anna Miller</h5>
              <span>Deginer</span>
            </div>
          </div>
          <div className="sin-testimonial">
            <div className="client-content">
              <p>
                “ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, laboris consequat. ”
              </p>
            </div>
            <div className="client-info">
              <img alt="" src="assets/images/testimonial/client-2.png" />
              <h5>Kevin Walker</h5>
              <span>Developer</span>
            </div>
          </div>
          <div className="sin-testimonial">
            <div className="client-content">
              <p>
                “ Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, laboris consequat. ”
              </p>
            </div>
            <div className="client-info">
              <img alt="" src="assets/images/testimonial/client-3.png" />
              <h5>Ruth Pierce</h5>
              <span>Customer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
