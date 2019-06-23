import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import Login from "./Login";
import Coupon from "./Coupon";
import Form from "./Form";
import OrderDetail from "./OrderDetail";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumb />
        <div class="checkout-main-area pt-90 pb-90">
          <div class="container">
            <Login />
            <Coupon />
            <div class="checkout-wrap pt-30">
              <div class="row">
                <Form />
                <OrderDetail />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Checkout;
