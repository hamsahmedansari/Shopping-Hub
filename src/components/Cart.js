import React from "react";

const Cart = () => {
  return (
    <div className="cart-wrap common-style ml-35">
      <button className="cart-active cart-3">
        <span className="mini-cart-price">$240</span>
        <i className="la la-shopping-cart" />
      </button>
      <div className="shopping-cart-content">
        <div className="shopping-cart-top">
          <h4>Your Cart</h4>
          <a className="cart-close" href="#">
            <i className="la la-close" />
          </a>
        </div>
        <ul>
          <li className="single-shopping-cart">
            <div className="shopping-cart-img">
              <a href="#">
                <img alt="" src="assets/images/cart/cart-1.jpg" />
              </a>
              <div className="item-close">
                <a href="#">
                  <i className="sli sli-close" />
                </a>
              </div>
            </div>
            <div className="shopping-cart-title">
              <h4>
                <a href="#">Golden Easy Spot Chair.</a>
              </h4>
              <span>$99.00</span>
            </div>
            <div className="shopping-cart-delete">
              <a href="#">
                <i className="la la-trash" />
              </a>
            </div>
          </li>
          <li className="single-shopping-cart">
            <div className="shopping-cart-img">
              <a href="#">
                <img alt="" src="assets/images/cart/cart-2.jpg" />
              </a>
              <div className="item-close">
                <a href="#">
                  <i className="sli sli-close" />
                </a>
              </div>
            </div>
            <div className="shopping-cart-title">
              <h4>
                <a href="#">Golden Easy Spot Chair.</a>
              </h4>
              <span>$99.00</span>
            </div>
            <div className="shopping-cart-delete">
              <a href="#">
                <i className="la la-trash" />
              </a>
            </div>
          </li>
          <li className="single-shopping-cart">
            <div className="shopping-cart-img">
              <a href="#">
                <img alt="" src="assets/images/cart/cart-3.jpg" />
              </a>
              <div className="item-close">
                <a href="#">
                  <i className="sli sli-close" />
                </a>
              </div>
            </div>
            <div className="shopping-cart-title">
              <h4>
                <a href="#">Golden Easy Spot Chair.</a>
              </h4>
              <span>$99.00</span>
            </div>
            <div className="shopping-cart-delete">
              <a href="#">
                <i className="la la-trash" />
              </a>
            </div>
          </li>
        </ul>
        <div className="shopping-cart-bottom">
          <div className="shopping-cart-total">
            <h4>
              Subtotal <span className="shop-total">$290.00</span>
            </h4>
          </div>
          <div className="shopping-cart-btn btn-hover default-btn text-center">
            <a className="black-color" href="checkout.html">
              Continue to Chackout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
