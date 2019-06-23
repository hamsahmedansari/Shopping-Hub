import React from "react";
import Cart from "./Cart";
import Navigation from "./Navigation";
import NavigationSearch from "./NavigationSearch";
import CartMobile from "./CartMobile";
import NavigationMobile from "./NavigationMobile";

const Header = () => {
  return (
    <React.Fragment>
      <header class="header-area transparent-bar sticky-bar pt-10">
        <div class="main-header-wrap">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-2 col-lg-3">
                <div class="logo">
                  <a href="index.html">
                    <img src="assets/images/logo/logo-1.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div class="col-xl-7 col-lg-6">
                <div class="main-menu menu-common-style menu-lh-1 menu-margin-4 menu-font-3 ml-20 menu-others-page">
                  <Navigation />
                </div>
              </div>
              <div class="col-xl-3 col-lg-3">
                <div class="header-right-wrap mt-10">
                  <div class="header-wishlist">
                    <a href="wishlist.html">
                      <i class="la la-heart-o" />
                    </a>
                  </div>
                  <div class="header-login ml-40">
                    <a href="login-register.html">
                      <i class="la la-user" />
                    </a>
                  </div>
                  <Cart />
                  <div class="search-wrap common-style ml-25">
                    <button class="search-active">
                      <i class="la la-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- main-search start --> */}
          <NavigationSearch />
        </div>
        <div class="header-small-mobile">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-6">
                <div class="mobile-logo">
                  <a href="index.html">
                    <img alt="" src="assets/images/logo/logo-1.png" />
                  </a>
                </div>
              </div>
              <div class="col-6">
                <div class="header-right-wrap">
                  <CartMobile />
                  <div class="mobile-off-canvas">
                    <a class="mobile-aside-button" href="#">
                      <i class="la la-navicon la-2x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="mobile-off-canvas-active">
        <a class="mobile-aside-close">
          <i class="la la-close" />
        </a>
        <div class="header-mobile-aside-wrap">
          <div class="mobile-search">
            <form class="search-form" action="#">
              <input type="text" placeholder="Search entire store…" />
              <button class="button-search">
                <i class="la la-search" />
              </button>
            </form>
          </div>
          <div class="mobile-menu-wrap">
            {/* <!-- mobile menu start --> */}
            <div class="mobile-navigation">
              {/* <!-- mobile menu navigation start --> */}
              <NavigationMobile />
              {/* <!-- mobile menu navigation end --> */}
            </div>
            {/* <!-- mobile menu end --> */}
          </div>
          <div class="mobile-curr-lang-wrap">
            <div class="single-mobile-curr-lang">
              <a class="mobile-language-active" href="#">
                Language <i class="la la-angle-down" />
              </a>
              <div class="lang-curr-dropdown lang-dropdown-active">
                <ul>
                  <li>
                    <a href="#">English (US)</a>
                  </li>
                  <li>
                    <a href="#">English (UK)</a>
                  </li>
                  <li>
                    <a href="#">Spanish</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="single-mobile-curr-lang">
              <a class="mobile-currency-active" href="#">
                Currency <i class="la la-angle-down" />
              </a>
              <div class="lang-curr-dropdown curr-dropdown-active">
                <ul>
                  <li>
                    <a href="#">USD</a>
                  </li>
                  <li>
                    <a href="#">EUR</a>
                  </li>
                  <li>
                    <a href="#">Real</a>
                  </li>
                  <li>
                    <a href="#">BDT</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="single-mobile-curr-lang">
              <a class="mobile-account-active" href="#">
                My Account <i class="la la-angle-down" />
              </a>
              <div class="lang-curr-dropdown account-dropdown-active">
                <ul>
                  <li>
                    <a href="#">Login</a>
                  </li>
                  <li>
                    <a href="#">Creat Account</a>
                  </li>
                  <li>
                    <a href="#">My Account</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mobile-social-wrap">
            <a class="facebook" href="#">
              <i class="ti-facebook" />
            </a>
            <a class="twitter" href="#">
              <i class="ti-twitter-alt" />
            </a>
            <a class="pinterest" href="#">
              <i class="ti-pinterest" />
            </a>
            <a class="instagram" href="#">
              <i class="ti-instagram" />
            </a>
            <a class="google" href="#">
              <i class="ti-google" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
