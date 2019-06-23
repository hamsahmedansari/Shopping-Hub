import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumb />
        <div class="cart-main-area pt-85 pb-90">
          <div class="container">
            <h3 class="cart-page-title">Your cart items</h3>
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <form action="#">
                  <div class="table-content table-responsive cart-table-content">
                    <table>
                      <TableHead />
                      <TableBody />
                    </table>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Wishlist;
