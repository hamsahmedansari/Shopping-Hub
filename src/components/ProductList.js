import React from "react";
const ProductList = () => {
  return (
    <div className="shop-list-wrap mb-30">
      <div className="row">
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
          <div className="product-list-img">
            <a href="product-details.html">
              <img
                src="assets/images/product/pro-hm1-1.jpg"
                alt="Product Style"
              />
            </a>
            <div className="product-list-quickview">
              <a
                data-toggle="modal"
                data-target="#exampleModal"
                title="Quick View"
                href="#"
              >
                <i className="la la-plus" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6">
          <div className="shop-list-content">
            <span>Chair</span>
            <h4>
              <a href="product-details.html">Golden Easy Spot Chair.</a>
            </h4>
            <div className="pro-list-price">
              <span>$40.00</span>
              <span className="old-price">$50.00</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipic it, sed do eiusmod
              tempor labor incididunt ut et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip.
            </p>
            <div className="product-list-action">
              <a title="Wishlist" href="#">
                <i className="la la-heart-o" />
              </a>
              <a title="Compare" href="#">
                <i className="la la-retweet" />
              </a>
              <a title="Add To Cart" href="#">
                <i className="la la-shopping-cart" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
