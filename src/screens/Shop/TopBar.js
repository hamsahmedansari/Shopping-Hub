import React from "react";
const TopBar = () => {
  return (
    <div class="shop-topbar-wrapper">
      <div class="shop-topbar-left">
        <div class="view-mode nav">
          <a class="active" href="#shop-1" data-toggle="tab">
            <i class="la la-th" />
          </a>
          <a href="#shop-2" data-toggle="tab">
            <i class="la la-list-ul" />
          </a>
        </div>
        <p>Showing 1 - 20 of 30 results </p>
      </div>
      <div class="product-sorting-wrapper">
        <div class="product-shorting shorting-style">
          <label>View:</label>
          <select>
            <option value=""> 20</option>
            <option value=""> 23</option>
            <option value=""> 30</option>
          </select>
        </div>
        <div class="product-show shorting-style">
          <label>Sort by:</label>
          <select>
            <option value="">Default</option>
            <option value=""> Name</option>
            <option value=""> price</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
