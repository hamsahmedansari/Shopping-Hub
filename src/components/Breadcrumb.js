import React from "react";
const Breadcrumb = () => {
  return (
    <div
      className="breadcrumb-area bg-img"
      style={{ backgroundImage: "url(assets/images/bg/breadcrumb.jpg)" }}
    >
      <div className="container">
        <div className="breadcrumb-content text-center">
          <h2>shop page</h2>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li className="active">shop </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
