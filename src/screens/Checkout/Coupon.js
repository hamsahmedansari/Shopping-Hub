import React from "react";

const Coupon = () => {
  return (
    <div class="customer-zone mb-20">
      <p class="cart-page-title">
        Have a coupon?{" "}
        <a class="checkout-click3" href="#">
          Click here to enter your code
        </a>
      </p>
      <div class="checkout-login-info3">
        <form action="#">
          <input type="text" placeholder="Coupon code" />
          <input type="submit" value="Apply Coupon" />
        </form>
      </div>
    </div>
  );
};

export default Coupon;
