import React from "react";

const FilterBySize = () => {
  return (
    <div className="sidebar-widget pt-40 mt-40 shop-sidebar-border">
      <h4 className="sidebar-title">Size </h4>
      <div className="sidebar-widget-list mt-20">
        <ul>
          <li>
            <div className="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                XL <span>4</span>
              </a>
              <span className="checkmark" />
            </div>
          </li>
          <li>
            <div className="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                L <span>5</span>
              </a>
              <span className="checkmark" />
            </div>
          </li>
          <li>
            <div className="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                SM <span>6</span>
              </a>
              <span className="checkmark" />
            </div>
          </li>
          <li>
            <div className="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                XXL <span>7</span>
              </a>
              <span className="checkmark" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterBySize;
