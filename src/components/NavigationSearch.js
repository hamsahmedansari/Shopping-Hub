import React from "react";

const NavigationSearch = () => {
  return (
    <div className="main-search-active">
      <div className="sidebar-search-icon">
        <button className="search-close">
          <span className="la la-close" />
        </button>
      </div>
      <div className="sidebar-search-input">
        <form>
          <div className="form-search">
            <input
              id="search"
              className="input-text"
              value=""
              placeholder="Search Now"
              type="search"
            />
            <button>
              <i className="la la-search" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NavigationSearch;
