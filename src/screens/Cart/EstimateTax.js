import React from "react";

const EstimateTax = () => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="cart-tax">
        <div className="title-wrap">
          <h4 className="cart-bottom-title section-bg-gray">
            Estimate Shipping And Tax
          </h4>
        </div>
        <div className="tax-wrapper">
          <p>Enter your destination to get a shipping estimate.</p>
          <div className="tax-select-wrapper">
            <div className="tax-select">
              <label>* Country</label>
              <select className="email s-email s-wid">
                <option>Bangladesh</option>
                <option>Albania</option>
                <option>Åland Islands</option>
                <option>Afghanistan</option>
                <option>Belgium</option>
              </select>
            </div>
            <div className="tax-select">
              <label>* Region / State</label>
              <select className="email s-email s-wid">
                <option>Bangladesh</option>
                <option>Albania</option>
                <option>Åland Islands</option>
                <option>Afghanistan</option>
                <option>Belgium</option>
              </select>
            </div>
            <div className="tax-select">
              <label>* Zip/Postal Code</label>
              <input type="text" />
            </div>
            <button className="cart-btn-2" type="submit">
              Get A Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateTax;
