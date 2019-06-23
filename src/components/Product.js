import React from "react";

const Product = () => {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
      <div className="product-wrap mb-35">
        <div className="product-img mb-15">
          <a href="product-details.html">
            <img src="assets/images/product/pro-hm1-1.jpg" alt="product" />
          </a>
          <div className="product-action">
            <a
              data-toggle="modal"
              data-target="#exampleModal"
              title="Quick View"
              href="#"
            >
              <i className="la la-plus" />
            </a>
            <a title="Wishlist" href="#">
              <i className="la la-heart-o" />
            </a>
            <a title="Compare" href="#">
              <i className="la la-retweet" />
            </a>
          </div>
        </div>
        <div className="product-content">
          <span>Chair</span>
          <h4>
            <a href="product-details.html">Golden Easy Spot Chair.</a>
          </h4>
          <div className="price-addtocart">
            <div className="product-price">
              <span>$210.00</span>
            </div>
            <div className="product-addtocart">
              <a title="Add To Cart" href="#">
                + Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
