import React from "react";

const FilterByTag = () => {
  return (
    <div className="sidebar-widget pt-40 mt-40 shop-sidebar-border">
      <h4 className="sidebar-title">Popular Tags </h4>
      <div className="sidebar-widget-tag mt-20">
        <ul>
          <li>
            <a href="#">Clothing</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">For Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Fashion</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterByTag;
