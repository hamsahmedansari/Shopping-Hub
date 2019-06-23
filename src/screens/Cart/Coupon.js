import React from "react";

const Coupon = () => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="discount-code-wrapper">
        <div className="title-wrap">
          <h4 className="cart-bottom-title section-bg-gray">Use Coupon Code</h4>
        </div>
        <div className="discount-code">
          <p>Enter your coupon code if you have one.</p>
          <form>
            <input type="text" required="" name="name" />
            <button className="cart-btn-2" type="submit">
              Apply Coupon
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Coupon;
