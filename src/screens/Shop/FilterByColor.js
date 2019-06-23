import React from "react";

const FilterByColor = () => {
  return (
    <div className="sidebar-widget pt-40 mt-40 shop-sidebar-border">
      <h4 className="sidebar-title">Colour </h4>
      <div className="sidebar-widget-list mt-20">
        <ul>
          <li>
            <div className="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                Green <span>7</span>
              </a>
              <span className="checkmark" />
            </div>
          </li>
          <li>
            <div className="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                Cream <span>8</span>
              </a>
              <span className="checkmark" />
            </div>
          </li>
          <li>
            <div className="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                Blue <span>9</span>
              </a>
              <span className="checkmark" />
            </div>
          </li>
          <li>
            <div className="sidebar-widget-list-left">
              <input type="checkbox" value="" />
              <a href="#">
                Black <span>3</span>
              </a>
              <span className="checkmark" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterByColor;
