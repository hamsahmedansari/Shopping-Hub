import React from "react";

const ProductInfo = () => {
  return (
    <div class="col-lg-6 col-md-6">
      <div class="product-details-content pro-details-content-modify">
        <span>Life Style</span>
        <h2>LaaVista Depro, FX 829 v1</h2>
        <div class="product-ratting-review">
          <div class="product-ratting">
            <i class="la la-star" />
            <i class="la la-star" />
            <i class="la la-star" />
            <i class="la la-star" />
            <i class="la la-star-half-o" />
          </div>
          <div class="product-review">
            <span>40+ Reviews</span>
          </div>
        </div>
        <div class="pro-details-color-wrap">
          <span>Color:</span>
          <div class="pro-details-color-content">
            <ul>
              <li class="green" />
              <li class="yellow" />
              <li class="red" />
              <li class="blue" />
            </ul>
          </div>
        </div>
        <div class="pro-details-size">
          <span>Size:</span>
          <div class="pro-details-size-content">
            <ul>
              <li>
                <a href="#">s</a>
              </li>
              <li>
                <a href="#">m</a>
              </li>
              <li>
                <a href="#">xl</a>
              </li>
              <li>
                <a href="#">xxl</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="pro-details-price-wrap">
          <div class="product-price">
            <span>$210.00</span>
            <span class="old">$230.00</span>
          </div>
          <div class="dec-rang">
            <span>- 30%</span>
          </div>
        </div>
        <div class="pro-details-quality">
          <div class="cart-plus-minus">
            <input
              class="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              value="02"
            />
          </div>
        </div>
        <div class="pro-details-compare-wishlist">
          <div class="pro-details-compare">
            <a title="Add To Compare" href="#">
              <i class="la la-retweet" /> Compare
            </a>
          </div>
          <div class="pro-details-wishlist">
            <a title="Add To Wishlist" href="#">
              <i class="la la-heart-o" /> Add to wish list
            </a>
          </div>
        </div>
        <div class="pro-details-buy-now btn-hover btn-hover-radious">
          <a href="#">Add To Cart</a>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
