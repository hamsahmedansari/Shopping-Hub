import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Breadcrumb = props => {
  const { title, breadcrumbs, image } = props;
  return (
    <div
      className="breadcrumb-area bg-img"
      style={{
        backgroundImage: `url(${
          image > 0 ? image : "assets/images/bg/breadcrumb.jpg"
        })`
      }}
    >
      <div className="container">
        <div className="breadcrumb-content text-center">
          <h2 style={{ textTransform: "capitalize" }}>{title}</h2>
          <ul>
            {breadcrumbs.map((breadcrumb, i) => (
              <li key={i}>
                <Link
                  to={breadcrumb.link}
                  className={breadcrumbs.length === i + 1 ? "active" : ""}
                >
                  {breadcrumb.text}
                </Link>
              </li>
            ))}
            {/* <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">shop </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.array.isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

export default Breadcrumb;
