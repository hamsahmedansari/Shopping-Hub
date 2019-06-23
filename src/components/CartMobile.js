import React from "react";

const CartMobile = () => {
  return (
    <div class="cart-wrap common-style">
      <button class="cart-active">
        <i class="la la-shopping-cart" />
        <span class="count-style">2 Items</span>
      </button>
      <div class="shopping-cart-content">
        <div class="shopping-cart-top">
          <h4>Your Cart</h4>
          <a class="cart-close" href="#">
            <i class="la la-close" />
          </a>
        </div>
        <ul>
          <li class="single-shopping-cart">
            <div class="shopping-cart-img">
              <a href="#">
                <img alt="" src="assets/images/cart/cart-1.jpg" />
              </a>
              <div class="item-close">
                <a href="#">
                  <i class="sli sli-close" />
                </a>
              </div>
            </div>
            <div class="shopping-cart-title">
              <h4>
                <a href="#">Golden Easy Spot Chair.</a>
              </h4>
              <span>$99.00</span>
            </div>
            <div class="shopping-cart-delete">
              <a href="#">
                <i class="la la-trash" />
              </a>
            </div>
          </li>
          <li class="single-shopping-cart">
            <div class="shopping-cart-img">
              <a href="#">
                <img alt="" src="assets/images/cart/cart-2.jpg" />
              </a>
              <div class="item-close">
                <a href="#">
                  <i class="sli sli-close" />
                </a>
              </div>
            </div>
            <div class="shopping-cart-title">
              <h4>
                <a href="#">Golden Easy Spot Chair.</a>
              </h4>
              <span>$99.00</span>
            </div>
            <div class="shopping-cart-delete">
              <a href="#">
                <i class="la la-trash" />
              </a>
            </div>
          </li>
          <li class="single-shopping-cart">
            <div class="shopping-cart-img">
              <a href="#">
                <img alt="" src="assets/images/cart/cart-3.jpg" />
              </a>
              <div class="item-close">
                <a href="#">
                  <i class="sli sli-close" />
                </a>
              </div>
            </div>
            <div class="shopping-cart-title">
              <h4>
                <a href="#">Golden Easy Spot Chair.</a>
              </h4>
              <span>$99.00</span>
            </div>
            <div class="shopping-cart-delete">
              <a href="#">
                <i class="la la-trash" />
              </a>
            </div>
          </li>
        </ul>
        <div class="shopping-cart-bottom">
          <div class="shopping-cart-total">
            <h4>
              Subtotal <span class="shop-total">$290.00</span>
            </h4>
          </div>
          <div class="shopping-cart-btn btn-hover default-btn text-center">
            <a class="black-color" href="checkout.html">
              Continue to Chackout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartMobile;
