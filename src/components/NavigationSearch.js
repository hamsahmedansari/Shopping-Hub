import React from "react";

const NavigationSearch = () => {
  return (
    <div class="main-search-active">
      <div class="sidebar-search-icon">
        <button class="search-close">
          <span class="la la-close" />
        </button>
      </div>
      <div class="sidebar-search-input">
        <form>
          <div class="form-search">
            <input
              id="search"
              class="input-text"
              value=""
              placeholder="Search Now"
              type="search"
            />
            <button>
              <i class="la la-search" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NavigationSearch;
