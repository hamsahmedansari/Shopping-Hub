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
        <div className="product-details-area pt-90 pb-90">
          <div className="container">
            <div className="row">
              <ProductSlider />
              <ProductInfo />
            </div>
          </div>
        </div>
        <div className="description-review-wrapper pb-90">
          <div className="container">
            <ProductDetails />
          </div>
        </div>
        <RelatedProducts />
      </React.Fragment>
    );
  }
}

export default Product;
