import React from "react";

import { Link } from "react-router-dom";

import Cart from "./Cart";
import Navigation from "./Navigation";
import NavigationSearch from "./NavigationSearch";
import CartMobile from "./CartMobile";
import NavigationMobile from "./NavigationMobile";
import NavigationMobileAccount from "./NavigationMobileAccount";

const Header = props => {
  return (
    <React.Fragment>
      <header className="header-area transparent-bar sticky-bar pt-10">
        <div className="main-header-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3">
                <div className="logo">
                  <Link to="/">
                    <img src="assets/images/logo/logo-1.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                <div className="main-menu menu-common-style menu-lh-1 menu-margin-4 menu-font-3 ml-20 menu-others-page">
                  <Navigation />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3">
                <div className="header-right-wrap mt-10">
                  <div className="header-wishlist">
                    <Link to="/wishlist">
                      <i className="la la-heart-o" />
                    </Link>
                  </div>
                  <div className="header-login ml-40">
                    <Link to="/profile">
                      <i className="la la-user" />
                    </Link>
                  </div>
                  <Cart />
                  <div className="search-wrap common-style ml-25">
                    <button className="search-active">
                      <i className="la la-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- main-search start --> */}
          <NavigationSearch />
        </div>
        <div className="header-small-mobile">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6">
                <div className="mobile-logo">
                  <Link to="index.html">
                    <img alt="" src="assets/images/logo/logo-1.png" />
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="header-right-wrap">
                  <CartMobile />
                  <div className="mobile-off-canvas">
                    <a className="mobile-aside-button" href="#">
                      <i className="la la-navicon la-2x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-off-canvas-active">
        <a className="mobile-aside-close">
          <i className="la la-close" />
        </a>
        <div className="header-mobile-aside-wrap">
          <div className="mobile-search">
            <form className="search-form" action="#">
              <input type="text" placeholder="Search entire store…" />
              <button className="button-search">
                <i className="la la-search" />
              </button>
            </form>
          </div>
          <div className="mobile-menu-wrap">
            {/* <!-- mobile menu start --> */}
            <div className="mobile-navigation">
              {/* <!-- mobile menu navigation start --> */}
              <NavigationMobile />
              {/* <!-- mobile menu navigation end --> */}
            </div>
            {/* <!-- mobile menu end --> */}
          </div>
          <NavigationMobileAccount />
          <div className="mobile-social-wrap">
            <a className="facebook" href="#">
              <i className="ti-facebook" />
            </a>
            <a className="twitter" href="#">
              <i className="ti-twitter-alt" />
            </a>
            <a className="pinterest" href="#">
              <i className="ti-pinterest" />
            </a>
            <a className="instagram" href="#">
              <i className="ti-instagram" />
            </a>
            <a className="google" href="#">
              <i className="ti-google" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
