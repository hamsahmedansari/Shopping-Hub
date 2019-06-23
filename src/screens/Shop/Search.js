import React, { Component } from "react";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar-widget">
        <h4 className="sidebar-title">Search </h4>
        <div className="sidebar-search mb-40 mt-20">
          <form className="sidebar-search-form" action="#">
            <input type="text" placeholder="Search here..." />
            <button>
              <i className="la la-search" />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
