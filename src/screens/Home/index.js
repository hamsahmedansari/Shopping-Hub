import React, { Component } from "react";
import Slider from "../../components/Slider";
import Banner from "../../components/Banner";
import ProductArea from "../../components/ProductArea";
import DiscountArea from "../../components/DiscountArea";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Slider />
        <Banner />
        <ProductArea />
        <DiscountArea />
        <ProductArea />
      </React.Fragment>
    );
  }
}

export default Home;
