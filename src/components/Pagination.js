import React from "react";
const Pagination = () => {
  return (
    <div class="pagination-style text-center">
      <ul>
        <li>
          <a class="prev" href="#">
            <i class="la la-angle-left" />
          </a>
        </li>
        <li>
          <a href="#">01</a>
        </li>
        <li>
          <a href="#">02</a>
        </li>
        <li>
          <a class="active" href="#">
            03
          </a>
        </li>
        <li>
          <a href="#">04</a>
        </li>
        <li>
          <a href="#">05</a>
        </li>
        <li>
          <a href="#">06</a>
        </li>
        <li>
          <a class="next" href="#">
            <i class="la la-angle-right" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
