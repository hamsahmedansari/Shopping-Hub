import React from "react";

const FilterBySize = () => {
  return (
    <div class="sidebar-widget pt-40 mt-40 shop-sidebar-border">
      <h4 class="sidebar-title">Size </h4>
      <div class="sidebar-widget-list mt-20">
        <ul>
          <li>
            <div class="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                XL <span>4</span>
              </a>
              <span class="checkmark" />
            </div>
          </li>
          <li>
            <div class="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                L <span>5</span>
              </a>
              <span class="checkmark" />
            </div>
          </li>
          <li>
            <div class="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                SM <span>6</span>
              </a>
              <span class="checkmark" />
            </div>
          </li>
          <li>
            <div class="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                XXL <span>7</span>
              </a>
              <span class="checkmark" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterBySize;
