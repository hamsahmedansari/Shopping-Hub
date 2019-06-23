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
        <Breadcrumb />
        <div class="my-account-wrapper pt-100 pb-100">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="myaccount-page-wrapper">
                  <div class="row">
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
