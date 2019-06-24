import React from "react";
import PropTypes from "prop-types";

const TableHeader = props => {
  const { list } = props;
  return (
    <thead>
      <tr>
        {list.map((item, i) => (
          <th key={i}>{item}</th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  list: PropTypes.array.isRequired
};

export default TableHeader;
