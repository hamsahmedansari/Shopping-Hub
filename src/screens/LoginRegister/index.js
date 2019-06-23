import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Login from "./Login";
import Register from "./Register";

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumb />
        <div class="login-register-area pt-85 pb-90">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 col-md-12 ml-auto mr-auto">
                <div class="login-register-wrapper">
                  <div class="login-register-tab-list nav">
                    <a class="active" data-toggle="tab" href="#lg1">
                      <h4> login </h4>
                    </a>
                    <a data-toggle="tab" href="#lg2">
                      <h4> register </h4>
                    </a>
                  </div>
                  <div class="tab-content">
                    <Login />
                    <Register />
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

export default LoginRegister;
