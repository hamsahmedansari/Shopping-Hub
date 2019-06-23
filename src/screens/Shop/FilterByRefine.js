import React from "react";

const FilterByRefine = () => {
  return (
    <div class="sidebar-widget shop-sidebar-border pt-40 mt-40">
      <h4 class="sidebar-title">Refine By </h4>
      <div class="sidebar-widget-list mt-20">
        <ul>
          <li>
            <div class="sidebar-widget-list-left">
              <input type="checkbox" />
              <a href="#">
                On Sale <span>4</span>
              </a>
              <span class="checkmark" />
            </div>
          </li>
          <li>
            <div class="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                New <span>5</span>
              </a>
              <span class="checkmark" />
            </div>
          </li>
          <li>
            <div class="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                In Stock <span>6</span>
              </a>
              <span class="checkmark" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterByRefine;
