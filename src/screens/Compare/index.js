import React, { Component } from "react";
import Breadcrumb from "../../components/Breadcrumb";

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Breadcrumb />
        <div class="compare-page-wrapper pt-90 pb-90">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                {/* <!-- Compare Page Content Start --> */}
                <div class="compare-page-content-wrap">
                  <div class="compare-table table-responsive">
                    <table class="table table-bordered mb-0">
                      <tbody>
                        <tr>
                          <td class="first-column">Product</td>
                          <td class="product-image-title">
                            <a href="single-product.html" class="image">
                              <img
                                class="img-fluid"
                                src="assets/images/product/pro-hm1-1.jpg"
                                alt="Compare Product"
                              />
                            </a>
                            <a href="#" class="category">
                              Table
                            </a>
                            <a href="single-product-sale.html" class="title">
                              Demo Product Name
                            </a>
                          </td>
                          <td class="product-image-title">
                            <a href="single-product.html" class="image">
                              <img
                                class="img-fluid"
                                src="assets/images/product/pro-hm1-2.jpg"
                                alt="Compare Product"
                              />
                            </a>
                            <a href="#" class="category">
                              Table
                            </a>
                            <a href="single-product-group.html" class="title">
                              Demo Product Name
                            </a>
                          </td>
                          <td class="product-image-title">
                            <a href="single-product.html" class="image">
                              <img
                                class="img-fluid"
                                src="assets/images/product/pro-hm1-3.jpg"
                                alt="Compare Product"
                              />
                            </a>
                            <a href="#" class="category">
                              Table
                            </a>
                            <a href="single-product.html" class="title">
                              Demo Product Name
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td class="first-column">Description</td>
                          <td class="pro-desc">
                            <p>
                              Samsome Note Book Pro 5 is an the best Laptop on
                              this budgeted. You can satisfied after usign this
                              laptop.
                            </p>
                          </td>
                          <td class="pro-desc">
                            <p>
                              Samsome Note Book Pro 5 is an the best Laptop on
                              this budgeted. You can satisfied after usign this
                              laptop.
                            </p>
                          </td>
                          <td class="pro-desc">
                            <p>
                              Samsome Note Book Pro 5 is an the best Laptop on
                              this budgeted. You can satisfied after usign this
                              laptop.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td class="first-column">Price</td>
                          <td class="pro-price">$295</td>
                          <td class="pro-price">$275</td>
                          <td class="pro-price">$395</td>
                        </tr>
                        <tr>
                          <td class="first-column">Color</td>
                          <td class="pro-color">Black</td>
                          <td class="pro-color">Red</td>
                          <td class="pro-color">Blue</td>
                        </tr>
                        <tr>
                          <td class="first-column">Stock</td>
                          <td class="pro-stock">In Stock</td>
                          <td class="pro-stock">Stock Out</td>
                          <td class="pro-stock">In Stock</td>
                        </tr>
                        <tr>
                          <td class="first-column">Add to cart</td>
                          <td>
                            <a href="cart.html" class="check-btn">
                              Add to Cart
                            </a>
                          </td>
                          <td>
                            <a href="cart.html" class="check-btn disabled">
                              Add to Cart
                            </a>
                          </td>
                          <td>
                            <a href="cart.html" class="check-btn">
                              Add to Cart
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td class="first-column">Rating</td>
                          <td class="pro-ratting">
                            <i class="la la-star" />
                            <i class="la la-star" />
                            <i class="la la-star" />
                            <i class="la la-star" />
                            <i class="la la-star" />
                          </td>
                          <td class="pro-ratting">
                            <i class="la la-star" />
                            <i class="la la-star" />
                            <i class="la la-star" />
                            <i class="la la-star" />
                            <i class="la la-star" />
                          </td>
                          <td class="pro-ratting">
                            <i class="la la-star" />
                            <i class="la la-star" />
                            <i class="la la-star" />
                            <i class="la la-star" />
                            <i class="la la-star" />
                          </td>
                        </tr>
                        <tr>
                          <td class="first-column">Remove</td>
                          <td class="pro-remove">
                            <button>
                              <i class="la la-trash" />
                            </button>
                          </td>
                          <td class="pro-remove">
                            <button>
                              <i class="la la-trash" />
                            </button>
                          </td>
                          <td class="pro-remove">
                            <button>
                              <i class="la la-trash" />
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <!-- Compare Page Content End --> */}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Compare;
