import React from "react";

const FilterByPrice = () => {
  return (
    <div className="shop-price-filter mt-35 shop-sidebar-border pt-40 sidebar-widget">
      <h4 className="sidebar-title">Price Filter</h4>
      <div className="price-filter mt-20">
        <span>Range: $100.00 - 1.300.00 </span>
        <div id="slider-range" />
        <div className="price-slider-amount">
          <div className="label-input">
            <input
              type="text"
              id="amount"
              name="price"
              placeholder="Add Your Price"
            />
          </div>
          <button type="button">Filter</button>
        </div>
      </div>
    </div>
  );
};

export default FilterByPrice;
