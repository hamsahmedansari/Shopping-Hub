import React from "react";
import Search from "./Search";
import SortByCategory from "./SortByCategory";
import FilterByPrice from "./FilterByPrice";
import FilterByRefine from "./FilterByRefine";
import FilterByColor from "./FilterByColor";
import FilterBySize from "./FilterBySize";
import FilterByTag from "./FilterByTag";

const SideBar = () => {
  return (
    <div className="sidebar-wrapper">
      <Search />
      <SortByCategory />
      <FilterByPrice />
      <FilterByRefine />
      <FilterByColor />
      <FilterBySize />
      <FilterByTag />
    </div>
  );
};

export default SideBar;
