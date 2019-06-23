import React from "react";

const Aside = () => {
  return (
    <div class="col-lg-3 col-md-4">
      <div class="myaccount-tab-menu nav" role="tablist">
        <a href="#dashboad" class="active" data-toggle="tab">
          <i class="fa fa-dashboard" />
          Dashboard
        </a>
        <a href="#orders" data-toggle="tab">
          <i class="fa fa-cart-arrow-down" /> Orders
        </a>
        <a href="#download" data-toggle="tab">
          <i class="fa fa-cloud-download" /> Download
        </a>
        <a href="#payment-method" data-toggle="tab">
          <i class="fa fa-credit-card" /> Payment Method
        </a>
        <a href="#address-edit" data-toggle="tab">
          <i class="fa fa-map-marker" /> address
        </a>
        <a href="#account-info" data-toggle="tab">
          <i class="fa fa-user" /> Account Details
        </a>
        <a href="login-register.html">
          <i class="fa fa-sign-out" /> Logout
        </a>
      </div>
    </div>
  );
};

export default Aside;
