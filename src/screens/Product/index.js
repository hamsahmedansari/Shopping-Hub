import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ProductSlider from "./ProductSlider";
import ProductInfo from "./ProductInfo";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "../../components/ProductArea";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <React.Fragment>
        <Breadcrumb />
        <div class="product-details-area pt-90 pb-90">
          <div class="container">
            <div class="row">
              <ProductSlider />
              <ProductInfo />
            </div>
          </div>
        </div>
        <div class="description-review-wrapper pb-90">
          <div class="container">
            <ProductDetails />
          </div>
        </div>
        <RelatedProducts />
      </React.Fragment>
    );
  }
}

export default Product;
