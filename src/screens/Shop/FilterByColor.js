import React from "react";

const FilterByColor = () => {
  return (
    <div class="sidebar-widget pt-40 mt-40 shop-sidebar-border">
      <h4 class="sidebar-title">Colour </h4>
      <div class="sidebar-widget-list mt-20">
        <ul>
          <li>
            <div class="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                Green <span>7</span>
              </a>
              <span class="checkmark" />
            </div>
          </li>
          <li>
            <div class="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                Cream <span>8</span>
              </a>
              <span class="checkmark" />
            </div>
          </li>
          <li>
            <div class="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                Blue <span>9</span>
              </a>
              <span class="checkmark" />
            </div>
          </li>
          <li>
            <div class="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                Black <span>3</span>
              </a>
              <span class="checkmark" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterByColor;
