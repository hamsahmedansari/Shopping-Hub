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
        <div className="checkout-main-area pt-90 pb-90">
          <div className="container">
            <Login />
            <Coupon />
            <div className="checkout-wrap pt-30">
              <div className="row">
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
