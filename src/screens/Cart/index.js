import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import EstimateTax from "./EstimateTax";
import Coupon from "./Coupon";
import Total from "./Total";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumb />
        <div className="cart-main-area pt-85 pb-90">
          <div className="container">
            <h3 className="cart-page-title">Your cart items</h3>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <form action="#">
                  <div className="table-content table-responsive cart-table-content">
                    <table>
                      <TableHeader />
                      <TableBody />
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="cart-shiping-update-wrapper">
                        <div className="cart-shiping-update">
                          <a href="#">Continue Shopping</a>
                        </div>
                        <div className="cart-clear">
                          <button>Update Shopping Cart</button>
                          <a href="#">Clear Shopping Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <EstimateTax />
                  <Coupon />
                  <Total />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
