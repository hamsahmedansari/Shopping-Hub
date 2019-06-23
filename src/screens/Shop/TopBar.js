import React from "react";
const TopBar = () => {
  return (
    <div className="shop-topbar-wrapper">
      <div className="shop-topbar-left">
        <div className="view-mode nav">
          <a className="active" href="#shop-1" data-toggle="tab">
            <i className="la la-th" />
          </a>
          <a href="#shop-2" data-toggle="tab">
            <i className="la la-list-ul" />
          </a>
        </div>
        <p>Showing 1 - 20 of 30 results </p>
      </div>
      <div className="product-sorting-wrapper">
        <div className="product-shorting shorting-style">
          <label>View:</label>
          <select>
            <option value=""> 20</option>
            <option value=""> 23</option>
            <option value=""> 30</option>
          </select>
        </div>
        <div className="product-show shorting-style">
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
