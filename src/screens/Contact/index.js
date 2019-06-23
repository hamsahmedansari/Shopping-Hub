import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumb />
        <div className="contact-area pt-85 pb-90">
          <div className="container">
            <div className="contact-info-wrap mb-50">
              <h3>contact info</h3>
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="single-contact-info text-center mb-30">
                    <i className="ti-location-pin" />
                    <h4>our address</h4>
                    <p>77 seventh Street, USA. </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="single-contact-info extra-contact-info text-center mb-30">
                    <ul>
                      <li>
                        <i className="ti-mobile" /> 716-298-1822{" "}
                      </li>
                      <li>
                        <i className="ti-email" />{" "}
                        <a href="#"> info@example.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="single-contact-info text-center mb-30">
                    <i className=" ti-alarm-clock" />
                    <h4>openning hour</h4>
                    <p>Monday - Friday. 9:00am - 5:00pm </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="get-in-touch-wrap">
              <h3>Get In Touch</h3>
              <div className="contact-from contact-shadow">
                <form id="contact-form" action="assets/mail.php" method="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <input name="name" type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-6">
                      <input name="email" type="email" placeholder="Email" />
                    </div>
                    <div className="col-lg-12">
                      <input name="subject" type="text" placeholder="Subject" />
                    </div>
                    <div className="col-lg-12">
                      <textarea name="message" placeholder="Your Message" />
                    </div>
                    <div className="col-lg-12">
                      <button className="submit" type="submit">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
                <p className="form-messege" />
              </div>
            </div>
            <div className="contact-map pt-90">
              <div id="map" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
