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
                <a href="dashboard-boxes.html">
                  <i class="fa fa-slack metismenu-icon pe-7s-display2" />
                  Dashboard
                </a>
              </li>
              <li>
                <a href="dashboard-boxes.html">
                  <i class="fa fa-area-chart metismenu-icon pe-7s-display2" />
                  Analytics
                </a>
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
                    <a href="elements-buttons-standard.html">
                      <i class="metismenu-icon" />
                      List
                    </a>
                  </li>
                  <li>
                    <a href="elements-dropdowns.html">
                      <i class="metismenu-icon" />
                      Draft
                    </a>
                  </li>
                  <li>
                    <a href="elements-icons.html">
                      <i class="metismenu-icon" />
                      Add Product
                    </a>
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
                    <a href="components-tabs.html">
                      <i class="metismenu-icon" />
                      List
                    </a>
                  </li>
                  <li>
                    <a href="components-accordions.html">
                      <i class="metismenu-icon" />
                      Add
                    </a>
                  </li>
                  <li>
                    <a href="components-notifications.html">
                      <i class="metismenu-icon" />
                      Admins
                    </a>
                  </li>
                  <li>
                    <a href="components-modals.html">
                      <i class="metismenu-icon" />
                      Pending
                    </a>
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
                    <a href="components-tabs.html">
                      <i class="metismenu-icon" />
                      List
                    </a>
                  </li>
                  <li>
                    <a href="components-notifications.html">
                      <i class="metismenu-icon" />
                      Tracking
                    </a>
                  </li>
                  <li>
                    <a href="components-modals.html">
                      <i class="metismenu-icon" />
                      Pending
                    </a>
                  </li>
                  <li>
                    <a href="components-modals.html">
                      <i class="metismenu-icon" />
                      New
                    </a>
                  </li>
                  <li>
                    <a href="components-modals.html">
                      <i class="metismenu-icon" />
                      Complete
                    </a>
                  </li>
                </ul>
              </li>
              <li class="app-sidebar__heading">Design</li>
              <li>
                <a href="dashboard-boxes.html">
                  <i class="fa fa-home metismenu-icon pe-7s-display2" />
                  HomePage
                </a>
              </li>
              <li>
                <a href="dashboard-boxes.html">
                  <i class="fa fa-medium metismenu-icon pe-7s-display2" />
                  About
                </a>
              </li>
              <li class="app-sidebar__heading">Utility</li>
              <li>
                <a href="dashboard-boxes.html">
                  <i class="fa fa-cog metismenu-icon pe-7s-display2" />
                  Setting
                </a>
              </li>
              <li>
                <a href="dashboard-boxes.html">
                  <i class="fa fa-cog metismenu-icon pe-7s-display2" />
                  Admin Panel Setting
                </a>
              </li>
              <li>
                <a href="dashboard-boxes.html">
                  <i class="fa fa-sign-out metismenu-icon pe-7s-display2" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
