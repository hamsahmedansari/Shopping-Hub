import React from "react";

import { Link } from "react-router-dom";

const Header = props => {
  return (
    <React.Fragment>
      <div className="app-header header-shadow bg-plum-plate header-text-light">
        <div className="app-header__logo">
          <div className="logo-src" />
          <div className="header__pane ml-auto">
            <div>
              <button
                type="button"
                className="hamburger close-sidebar-btn hamburger--elastic"
                dataclass="closed-sidebar"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="app-header__mobile-menu">
          <div>
            <button
              type="button"
              className="hamburger hamburger--elastic mobile-toggle-nav"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
        <div className="app-header__menu">
          <span>
            <button
              type="button"
              className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span className="btn-icon-wrapper">
                <i class="fa fa-ellipsis-h" aria-hidden="true" />
              </span>
            </button>
          </span>
        </div>
        <div className="app-header__content">
          <div className="app-header-left">
            <ul className="header-menu nav">
              <li className="dropdown nav-item">
                <a href="javascript:void(0);" className="nav-link">
                  <i className="nav-link-icon fa fa-cog" />
                  Settings
                </a>
              </li>
            </ul>
          </div>
          <div className="app-header-right">
            <div className="header-btn-lg pr-0">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div className="btn-group">
                      <a className="p-0 btn">
                        <img
                          width="42"
                          className="rounded-circle"
                          src="./assets/images/avatars/1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="widget-content-left  ml-3 header-user-info">
                    <div className="widget-heading">Alina Mclourd</div>
                    <div className="widget-subheading">VP People Manager</div>
                  </div>
                  <div className="widget-content-right header-user-info ml-3">
                    <button
                      type="button"
                      className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
