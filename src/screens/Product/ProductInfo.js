import React from "react";

const ProductInfo = () => {
  return (
    <div className="col-lg-6 col-md-6">
      <div className="product-details-content pro-details-content-modify">
        <span>Life Style</span>
        <h2>LaaVista Depro, FX 829 v1</h2>
        <div className="product-ratting-review">
          <div className="product-ratting">
            <i className="la la-star" />
            <i className="la la-star" />
            <i className="la la-star" />
            <i className="la la-star" />
            <i className="la la-star-half-o" />
          </div>
          <div className="product-review">
            <span>40+ Reviews</span>
          </div>
        </div>
        <div className="pro-details-color-wrap">
          <span>Color:</span>
          <div className="pro-details-color-content">
            <ul>
              <li className="green" />
              <li className="yellow" />
              <li className="red" />
              <li className="blue" />
            </ul>
          </div>
        </div>
        <div className="pro-details-size">
          <span>Size:</span>
          <div className="pro-details-size-content">
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
        <div className="pro-details-price-wrap">
          <div className="product-price">
            <span>$210.00</span>
            <span className="old">$230.00</span>
          </div>
          <div className="dec-rang">
            <span>- 30%</span>
          </div>
        </div>
        <div className="pro-details-quality">
          <div className="cart-plus-minus">
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              value="02"
            />
          </div>
        </div>
        <div className="pro-details-compare-wishlist">
          <div className="pro-details-compare">
            <a title="Add To Compare" href="#">
              <i className="la la-retweet" /> Compare
            </a>
          </div>
          <div className="pro-details-wishlist">
            <a title="Add To Wishlist" href="#">
              <i className="la la-heart-o" /> Add to wish list
            </a>
          </div>
        </div>
        <div className="pro-details-buy-now btn-hover btn-hover-radious">
          <a href="#">Add To Cart</a>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
