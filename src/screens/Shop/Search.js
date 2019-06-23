import React, { Component } from "react";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div class="sidebar-widget">
        <h4 class="sidebar-title">Search </h4>
        <div class="sidebar-search mb-40 mt-20">
          <form class="sidebar-search-form" action="#">
            <input type="text" placeholder="Search here..." />
            <button>
              <i class="la la-search" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
