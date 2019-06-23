import React from "react";

const Product = () => {
  return (
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
      <div class="product-wrap mb-35">
        <div class="product-img mb-15">
          <a href="product-details.html">
            <img src="assets/images/product/pro-hm1-1.jpg" alt="product" />
          </a>
          <div class="product-action">
            <a
              data-toggle="modal"
              data-target="#exampleModal"
              title="Quick View"
              href="#"
            >
              <i class="la la-plus" />
            </a>
            <a title="Wishlist" href="#">
              <i class="la la-heart-o" />
            </a>
            <a title="Compare" href="#">
              <i class="la la-retweet" />
            </a>
          </div>
        </div>
        <div class="product-content">
          <span>Chair</span>
          <h4>
            <a href="product-details.html">Golden Easy Spot Chair.</a>
          </h4>
          <div class="price-addtocart">
            <div class="product-price">
              <span>$210.00</span>
            </div>
            <div class="product-addtocart">
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
