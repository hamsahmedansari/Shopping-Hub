import React from "react";

const Coupon = () => {
  return (
    <div className="customer-zone mb-20">
      <p className="cart-page-title">
        Have a coupon?{" "}
        <a className="checkout-click3" href="#">
          Click here to enter your code
        </a>
      </p>
      <div className="checkout-login-info3">
        <form action="#">
          <input type="text" placeholder="Coupon code" />
          <input type="submit" value="Apply Coupon" />
        </form>
      </div>
    </div>
  );
};

export default Coupon;
