import React from "react";

const Aside = () => {
  return (
    <div className="col-lg-3 col-md-4">
      <div className="myaccount-tab-menu nav" role="tablist">
        <a href="#dashboad" className="active" data-toggle="tab">
          <i className="fa fa-dashboard" />
          Dashboard
        </a>
        <a href="#orders" data-toggle="tab">
          <i className="fa fa-cart-arrow-down" /> Orders
        </a>
        <a href="#download" data-toggle="tab">
          <i className="fa fa-cloud-download" /> Products
        </a>
        <a href="#addProduct" data-toggle="tab">
          <i className="fa fa-cloud-download" /> Add Products
        </a>
        <a href="#payment-method" data-toggle="tab">
          <i className="fa fa-credit-card" /> Payment Method
        </a>
        <a href="#account-info" data-toggle="tab">
          <i className="fa fa-user" /> Account Details
        </a>
        <a href="login-register.html">
          <i className="fa fa-sign-out" /> Logout
        </a>
      </div>
    </div>
  );
};

export default Aside;
