import React from "react";
import { Link } from "react-router-dom";

const ProductArea = () => {
  return (
    <div className="product-area pb-135">
      <div className="container">
        <div className="section-title text-center mb-40">
          <h2>Best Sell</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </p>
        </div>
        <div className="product-slider-active owl-carousel">
          <div className="product-wrap">
            <div className="product-img mb-15">
              <Link to="/product">
                <img src="assets/images/product/pro-hm1-1.jpg" alt="product" />
              </Link>
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
                <Link to="/product">Golden Easy Spot Chair.</Link>
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
          <div className="product-wrap">
            <div className="product-img mb-15">
              <Link to="/product">
                <img src="assets/images/product/pro-hm1-2.jpg" alt="product" />
              </Link>
              <span className="price-dec">-30%</span>
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
                <Link to="/product">Golden Easy Spot Chair.</Link>
              </h4>
              <div className="price-addtocart">
                <div className="product-price">
                  <span>$210.00</span>
                  <span className="old">$230.00</span>
                </div>
                <div className="product-addtocart">
                  <a title="Add To Cart" href="#">
                    + Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="product-wrap">
            <div className="product-img mb-15">
              <Link to="/product">
                <img src="assets/images/product/pro-hm1-3.jpg" alt="product" />
              </Link>
              <span className="new-stock">
                <span>
                  Stock <br />
                  Out
                </span>
              </span>
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
                <Link to="/product">Golden Easy Spot Chair.</Link>
              </h4>
              <div className="price-addtocart">
                <div className="product-price">
                  <span>$250.00</span>
                </div>
                <div className="product-addtocart">
                  <a title="Add To Cart" href="#">
                    + Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="product-wrap">
            <div className="product-img mb-15">
              <Link to="/product">
                <img src="assets/images/product/pro-hm1-4.jpg" alt="product" />
              </Link>
              <span className="price-dec font-dec">NEW</span>
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
                <Link to="/product">Golden Easy Spot Chair.</Link>
              </h4>
              <div className="price-addtocart">
                <div className="product-price">
                  <span>$320.00</span>
                  <span className="old">$120.00</span>
                </div>
                <div className="product-addtocart">
                  <a title="Add To Cart" href="#">
                    + Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="product-wrap">
            <div className="product-img mb-15">
              <Link to="/product">
                <img src="assets/images/product/pro-hm1-2.jpg" alt="product" />
              </Link>
              <span className="price-dec">-30%</span>
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
                <Link to="/product">Golden Easy Spot Chair.</Link>
              </h4>
              <div className="price-addtocart">
                <div className="product-price">
                  <span>$210.00</span>
                  <span className="old">$230.00</span>
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
      </div>
    </div>
  );
};

export default ProductArea;
