import React from "react";

import { Link } from "react-router-dom";

const Sidebar = props => {
  return (
    <React.Fragment>
      <div class="app-sidebar sidebar-shadow bg-plum-plate sidebar-text-light">
        <div class="app-header__logo">
          <div class="logo-src" />
          <div class="header__pane ml-auto">
            <div>
              <button
                type="button"
                class="hamburger close-sidebar-btn hamburger--elastic"
                data-class="closed-sidebar"
              >
                <span class="hamburger-box">
                  <span class="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="app-header__mobile-menu">
          <div>
            <button
              type="button"
              class="hamburger hamburger--elastic mobile-toggle-nav"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
        <div class="app-header__menu">
          <span>
            <button
              type="button"
              class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span class="btn-icon-wrapper">
                <i class="fa fa-ellipsis-h" aria-hidden="true" />
              </span>
            </button>
          </span>
        </div>{" "}
        <div class="scrollbar-sidebar">
          <div class="app-sidebar__inner">
            <ul class="vertical-nav-menu">
              <li class="app-sidebar__heading">Overview</li>
              <li>
                <Link to="/admin/dashboard">
                  <i class="fa fa-slack metismenu-icon pe-7s-display2" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin/analytics">
                  <i class="fa fa-area-chart metismenu-icon pe-7s-display2" />
                  Analytics
                </Link>
              </li>
              <li class="app-sidebar__heading">Actions</li>
              <li>
                <a href="#">
                  <i class="fa fa-product-hunt metismenu-icon pe-7s-diamond" />
                  Products
                  <i class="fa fa-caret-down metismenu-icon pe-7s-display2" />{" "}
                </a>
                <ul>
                  <li>
                    <Link to="/admin/products/list">
                      <i class="metismenu-icon" />
                      List
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/products/draft">
                      <i class="metismenu-icon" />
                      Draft
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/product/add">
                      <i class="metismenu-icon" />
                      Add Product
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-user-o metismenu-icon pe-7s-car" />
                  Users
                  <i class="fa fa-caret-down metismenu-icon pe-7s-display2" />
                </a>
                <ul>
                  <li>
                    <Link to="/admin/users/list">
                      <i class="metismenu-icon" />
                      List
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/users/add">
                      <i class="metismenu-icon" />
                      Add
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/users/admins">
                      <i class="metismenu-icon" />
                      Admins
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/users/pending">
                      <i class="metismenu-icon" />
                      Pending
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">
                  <i class="fa fa-first-order metismenu-icon pe-7s-car" />
                  Order
                  <i class="fa fa-caret-down metismenu-icon pe-7s-display2" />
                </a>
                <ul>
                  <li>
                    <Link to="/admin/orders/list">
                      <i class="metismenu-icon" />
                      List
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/orders/tracking">
                      <i class="metismenu-icon" />
                      Tracking
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/orders/pending">
                      <i class="metismenu-icon" />
                      Pending
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/orders/new">
                      <i class="metismenu-icon" />
                      New
                    </Link>
                  </li>
                  <li>
                    <Link to="/admin/orders/complete">
                      <i class="metismenu-icon" />
                      Complete
                    </Link>
                  </li>
                </ul>
              </li>
              <li class="app-sidebar__heading">Design</li>
              <li>
                <Link to="/admin/design/homepage">
                  <i class="fa fa-home metismenu-icon pe-7s-display2" />
                  HomePage
                </Link>
              </li>
              <li>
                <Link to="/admin/design/about">
                  <i class="fa fa-medium metismenu-icon pe-7s-display2" />
                  About
                </Link>
              </li>
              <li class="app-sidebar__heading">Utility</li>
              <li>
                <Link to="/admin/setting">
                  <i class="fa fa-cog metismenu-icon pe-7s-display2" />
                  Setting
                </Link>
              </li>
              <li>
                <Link to="/admin/setting/admin">
                  <i class="fa fa-cog metismenu-icon pe-7s-display2" />
                  Admin Panel Setting
                </Link>
              </li>
              <li>
                <Link to="/admin/logout">
                  <i class="fa fa-sign-out metismenu-icon pe-7s-display2" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
