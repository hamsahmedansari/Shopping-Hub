import React from "react";

const Total = () => {
  return (
    <div className="col-lg-4 col-md-12">
      <div className="grand-totall">
        <div className="title-wrap">
          <h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
        </div>
        <h5>
          Total products <span>$260.00</span>
        </h5>
        <div className="total-shipping">
          <h5>Total shipping</h5>
          <ul>
            <li>
              <input type="checkbox" /> Standard <span>$20.00</span>
            </li>
            <li>
              <input type="checkbox" /> Express <span>$30.00</span>
            </li>
          </ul>
        </div>
        <h4 className="grand-totall-title">
          Grand Total <span>$260.00</span>
        </h4>
        <a href="#">Proceed to Checkout</a>
      </div>
    </div>
  );
};

export default Total;
