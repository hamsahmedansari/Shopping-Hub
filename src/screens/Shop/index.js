import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ShopArea from "./ShopArea";
class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumb />
        <ShopArea />
      </React.Fragment>
    );
  }
}

export default Shop;
