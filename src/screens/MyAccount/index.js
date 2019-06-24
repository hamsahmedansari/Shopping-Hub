import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Aside from "./Aside";
import Section from "./Section";

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          title="Profile"
          breadcrumbs={[
            {
              link: "/",
              text: "Home"
            },
            {
              link: "/profile",
              text: "Profile"
            }
          ]}
          image={false}
        />
        <div className="my-account-wrapper pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="myaccount-page-wrapper">
                  <div className="row">
                    <Aside />
                    <Section />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MyAccount;
