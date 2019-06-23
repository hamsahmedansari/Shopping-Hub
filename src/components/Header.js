import React from "react";

const Header = () => {
  return <React.Fragment>
      <header className="header-area transparent-bar sticky-bar">
  <div className="main-header-wrap">
      <div className="container">
          <div className="row">
              <div className="col-xl-3 col-lg-3">
                  <div className="logo mt-40">
                      <a href="index.html"><img src="assets/images/logo/logo-1.png" alt="logo"/></a>
                  </div>
              </div>
              <div className="col-xl-7 col-lg-6">
                  <div className="main-menu menu-common-style menu-lh-1 menu-other-style">
                      <nav>
                          <ul>
                              <li className="angle-shape"><a href="index.html">Home</a>
                                  <ul className="submenu">
                                      <li><a href="index.html">Home version 1 </a></li>
                                      <li><a href="index-2.html">Home version 2 </a></li>
                                      <li><a href="index-3.html">Home version 3 </a></li>
                                      <li><a href="index-4.html">Home version 4 </a></li>
                                      <li><a href="index-5.html">Home version 5 </a></li>
                                      <li><a href="index-6.html">Home version 6 </a></li>
                                      <li><a href="index-7.html">Home version 7 </a></li>
                                      <li><a href="index-8.html">Home version 8 </a></li>
                                      <li><a href="index-9.html">Home version 9 </a></li>
                                      <li><a href="index-10.html">Home version 10 </a></li>
                                  </ul>
                              </li>
                              <li className="angle-shape"><a href="shop.html">Shop </a>
                                  <ul className="mega-menu">
                                      <li><a className="menu-title" href="#">Shop Layout</a>
                                          <ul>
                                              <li><a href="shop.html">standard style</a></li>
                                              <li><a href="shop-2.html">standard style 2</a></li>
                                              <li><a href="shop-2-col.html">shop 2 column</a></li>
                                              <li><a href="shop-no-sidebar.html">shop no sidebar</a></li>
                                              <li><a href="shop-fullwide.html">shop fullwide</a></li>

                                          </ul>
                                      </li>
                                      <li><a className="menu-title" href="#">Shop Layout</a>
                                          <ul>
                                              <li><a href="shop-fullwide-no-sidebar.html">fullwide no sidebar </a></li>
                                              <li><a href="shop-list.html">list style</a></li>
                                              <li><a href="shop-list-2col.html">list 2 column</a></li>
                                              <li><a href="shop-list-no-sidebar.html">list no sidebar</a></li>
                                          </ul>
                                      </li>
                                      <li><a className="menu-title" href="#">Product Details</a>
                                          <ul>
                                              <li><a href="product-details.html">standard style</a></li>
                                              <li><a href="product-details-2.html">standard style 2</a></li>
                                              <li><a href="product-details-tab1.html">tab style 1</a></li>
                                              <li><a href="product-details-tab2.html">tab style 2</a></li>
                                              <li><a href="product-details-tab3.html">tab style 3 </a></li>
                                          </ul>
                                      </li>
                                      <li><a className="menu-title" href="#">Product Details</a>
                                          <ul>
                                              <li><a href="product-details-gallery.html">gallery style </a></li>
                                              <li><a href="product-details-sticky.html">sticky style</a></li>
                                              <li><a href="product-details-slider.html">slider style</a></li>
                                              <li><a href="product-details-affiliate.html">Affiliate style</a></li>
                                          </ul>
                                      </li>
                                  </ul>
                              </li>
                              <li><a href="shop.html">Mens</a></li>
                              <li className="angle-shape"><a href="#">Pages</a>
                                  <ul className="submenu">
                                      <li><a href="about-us.html">about us </a></li>
                                      <li><a href="cart.html">cart page </a></li>
                                      <li><a href="checkout.html">checkout </a></li>
                                      <li><a href="compare.html">compare </a></li>
                                      <li><a href="wishlist.html">wishlist </a></li>
                                      <li><a href="my-account.html">my account </a></li>
                                      <li><a href="contact.html">contact us </a></li>
                                      <li><a href="login-register.html">login/register </a></li>
                                  </ul>
                              </li>
                              <li className="angle-shape"><a href="blog.html">Blog</a>
                                  <ul className="submenu">
                                      <li><a href="blog.html">standard style </a></li>
                                      <li><a href="blog-2col.html">blog 2 column </a></li>
                                      <li><a href="blog-sidebar.html">blog sidebar </a></li>
                                      <li><a href="blog-details.html">blog details </a></li>
                                  </ul>
                              </li>
                              <li><a href="contact.html">Contact</a></li>
                          </ul>
                      </nav>
                  </div>
              </div>
              <div className="col-xl-2 col-lg-3">
                  <div className="header-right-wrap mt-40">
                      <div className="cart-wrap common-style">
                          <button className="cart-active">
                              <i className="la la-shopping-cart"></i>
                              <span className="count-style">2 Items</span>
                          </button>
                          <div className="shopping-cart-content">
                              <div className="shopping-cart-top">
                                  <h4>Your Cart</h4>
                                  <a className="cart-close" href="#"><i className="la la-close"></i></a>
                              </div>
                              <ul>
                                  <li className="single-shopping-cart">
                                      <div className="shopping-cart-img">
                                          <a href="#"><img alt="" src="assets/images/cart/cart-1.jpg" /></a>
                                          <div className="item-close">
                                              <a href="#"><i className="sli sli-close"></i></a>
                                          </div>
                                      </div>
                                      <div className="shopping-cart-title">
                                          <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                          <span>$99.00</span>
                                      </div>
                                      <div className="shopping-cart-delete">
                                          <a href="#"><i className="la la-trash"></i></a>
                                      </div>
                                  </li>
                                  <li className="single-shopping-cart">
                                      <div className="shopping-cart-img">
                                          <a href="#"><img alt="" src="assets/images/cart/cart-2.jpg"/></a>
                                          <div className="item-close">
                                              <a href="#"><i className="sli sli-close"></i></a>
                                          </div>
                                      </div>
                                      <div className="shopping-cart-title">
                                          <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                          <span>$99.00</span>
                                      </div>
                                      <div className="shopping-cart-delete">
                                          <a href="#"><i className="la la-trash"></i></a>
                                      </div>
                                  </li>
                                  <li className="single-shopping-cart">
                                      <div className="shopping-cart-img">
                                          <a href="#"><img alt="" src="assets/images/cart/cart-3.jpg"/></a>
                                          <div className="item-close">
                                              <a href="#"><i className="sli sli-close"></i></a>
                                          </div>
                                      </div>
                                      <div className="shopping-cart-title">
                                          <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                          <span>$99.00</span>
                                      </div>
                                      <div className="shopping-cart-delete">
                                          <a href="#"><i className="la la-trash"></i></a>
                                      </div>
                                  </li>
                              </ul>
                              <div className="shopping-cart-bottom">
                                  <div className="shopping-cart-total">
                                      <h4>Subtotal <span className="shop-total">$290.00</span></h4>
                                  </div>
                                  <div className="shopping-cart-btn btn-hover default-btn text-center">
                                      <a className="black-color" href="checkout.html">Continue to Chackout</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="search-wrap common-style ml-25">
                          <button className="search-active">
                              <i className="la la-search"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* <!-- main-search start --> */}
      <div className="main-search-active">
          <div className="sidebar-search-icon">
              <button className="search-close"><span className="la la-close"></span></button>
          </div>
          <div className="sidebar-search-input">
              <form>
                  <div className="form-search">
                      <input id="search" className="input-text" placeholder="Search Now" type="search"/>
                      <button>
                          <i className="la la-search"></i>
                      </button>
                  </div>
              </form>
          </div>
      </div>
  </div>
  <div className="header-small-mobile">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-6">
                  <div className="mobile-logo">
                      <a href="index.html">
                          <img alt="" src="assets/images/logo/logo-1.png" />
                      </a>
                  </div>
              </div>
              <div className="col-6">
                  <div className="header-right-wrap">
                      <div className="cart-wrap common-style">
                          <button className="cart-active">
                              <i className="la la-shopping-cart"></i>
                              <span className="count-style">2 Items</span>
                          </button>
                          <div className="shopping-cart-content">
                              <div className="shopping-cart-top">
                                  <h4>Your Cart</h4>
                                  <a className="cart-close" href="#"><i className="la la-close"></i></a>
                              </div>
                              <ul>
                                  <li className="single-shopping-cart">
                                      <div className="shopping-cart-img">
                                          <a href="#"><img alt="" src="assets/images/cart/cart-1.jpg" /></a>
                                          <div className="item-close">
                                              <a href="#"><i className="sli sli-close"></i></a>
                                          </div>
                                      </div>
                                      <div className="shopping-cart-title">
                                          <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                          <span>$99.00</span>
                                      </div>
                                      <div className="shopping-cart-delete">
                                          <a href="#"><i className="la la-trash"></i></a>
                                      </div>
                                  </li>
                                  <li className="single-shopping-cart">
                                      <div className="shopping-cart-img">
                                          <a href="#"><img alt="" src="assets/images/cart/cart-2.jpg" /></a>
                                          <div className="item-close">
                                              <a href="#"><i className="sli sli-close"></i></a>
                                          </div>
                                      </div>
                                      <div className="shopping-cart-title">
                                          <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                          <span>$99.00</span>
                                      </div>
                                      <div className="shopping-cart-delete">
                                          <a href="#"><i className="la la-trash"></i></a>
                                      </div>
                                  </li>
                                  <li className="single-shopping-cart">
                                      <div className="shopping-cart-img">
                                          <a href="#"><img alt="" src="assets/images/cart/cart-3.jpg" /></a>
                                          <div className="item-close">
                                              <a href="#"><i className="sli sli-close"></i></a>
                                          </div>
                                      </div>
                                      <div className="shopping-cart-title">
                                          <h4><a href="#">Golden Easy Spot Chair.</a></h4>
                                          <span>$99.00</span>
                                      </div>
                                      <div className="shopping-cart-delete">
                                          <a href="#"><i className="la la-trash"></i></a>
                                      </div>
                                  </li>
                              </ul>
                              <div className="shopping-cart-bottom">
                                  <div className="shopping-cart-total">
                                      <h4>Subtotal <span className="shop-total">$290.00</span></h4>
                                  </div>
                                  <div className="shopping-cart-btn btn-hover default-btn text-center">
                                      <a className="black-color" href="checkout.html">Continue to Chackout</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="mobile-off-canvas">
                          <a className="mobile-aside-button" href="#"><i className="la la-navicon la-2x"></i></a>
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
        <nav>
          <ul className="mobile-menu">
            <li className="menu-item-has-children">
              <a href="index.html">Home</a>
              <ul className="dropdown">
                <li>
                  <a href="index.html">Home version 1 </a>
                </li>
                <li>
                  <a href="index-2.html">Home version 2 </a>
                </li>
                <li>
                  <a href="index-3.html">Home version 3 </a>
                </li>
                <li>
                  <a href="index-4.html">Home version 4 </a>
                </li>
                <li>
                  <a href="index-5.html">Home version 5 </a>
                </li>
                <li>
                  <a href="index-6.html">Home version 6 </a>
                </li>
                <li>
                  <a href="index-7.html">Home version 7 </a>
                </li>
                <li>
                  <a href="index-8.html">Home version 8 </a>
                </li>
                <li>
                  <a href="index-9.html">Home version 9 </a>
                </li>
                <li>
                  <a href="index-10.html">Home version 10 </a>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children ">
              <a href="#">shop</a>
              <ul className="dropdown">
                <li className="menu-item-has-children">
                  <a href="#">shop layout</a>
                  <ul className="dropdown">
                    <li>
                      <a href="shop.html">standard grid style</a>
                    </li>
                    <li>
                      <a href="shop-2.html">standard style 2</a>
                    </li>
                    <li>
                      <a href="shop-2-col.html">shop 2 column</a>
                    </li>
                    <li>
                      <a href="shop-no-sidebar.html">shop no sidebar</a>
                    </li>
                    <li>
                      <a href="shop-fullwide.html">shop fullwide</a>
                    </li>
                    <li>
                      <a href="shop-fullwide-no-sidebar.html">
                        fullwide no sidebar{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">shop list layout</a>
                  <ul className="dropdown">
                    <li>
                      <a href="shop-list.html">list style</a>
                    </li>
                    <li>
                      <a href="shop-list-2col.html">list 2 column</a>
                    </li>
                    <li>
                      <a href="shop-list-no-sidebar.html">
                        list no sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item-has-children">
                  <a href="#">product details</a>
                  <ul className="dropdown">
                    <li>
                      <a href="product-details.html">standard style</a>
                    </li>
                    <li>
                      <a href="product-details-2.html">standard style 2</a>
                    </li>
                    <li>
                      <a href="product-details-tab1.html">tab style 1</a>
                    </li>
                    <li>
                      <a href="product-details-tab2.html">tab style 2</a>
                    </li>
                    <li>
                      <a href="product-details-tab3.html">tab style 3 </a>
                    </li>
                    <li>
                      <a href="product-details-gallery.html">
                        gallery style{" "}
                      </a>
                    </li>
                    <li>
                      <a href="product-details-sticky.html">sticky style</a>
                    </li>
                    <li>
                      <a href="product-details-slider.html">slider style</a>
                    </li>
                    <li>
                      <a href="product-details-affiliate.html">
                        Affiliate style
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Pages</a>
              <ul className="dropdown">
                <li>
                  <a href="about-us.html">about us </a>
                </li>
                <li>
                  <a href="cart.html">cart page </a>
                </li>
                <li>
                  <a href="checkout.html">checkout </a>
                </li>
                <li>
                  <a href="compare.html">compare </a>
                </li>
                <li>
                  <a href="wishlist.html">wishlist </a>
                </li>
                <li>
                  <a href="my-account.html">my account </a>
                </li>
                <li>
                  <a href="contact.html">contact us </a>
                </li>
                <li>
                  <a href="login-register.html">login/register </a>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children ">
              <a href="#">Blog</a>
              <ul className="dropdown">
                <li>
                  <a href="blog.html">standard style </a>
                </li>
                <li>
                  <a href="blog-2col.html">blog 2 column </a>
                </li>
                <li>
                  <a href="blog-sidebar.html">blog sidebar </a>
                </li>
                <li>
                  <a href="blog-details.html">blog details </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact us</a>
            </li>
          </ul>
        </nav>
        {/* <!-- mobile menu navigation end --> */}
      </div>
      {/* <!-- mobile menu end --> */}
    </div>
    <div className="mobile-curr-lang-wrap">
      <div className="single-mobile-curr-lang">
        <a className="mobile-language-active" href="#">
          Language <i className="la la-angle-down" />
        </a>
        <div className="lang-curr-dropdown lang-dropdown-active">
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
      <div className="single-mobile-curr-lang">
        <a className="mobile-currency-active" href="#">
          Currency <i className="la la-angle-down" />
        </a>
        <div className="lang-curr-dropdown curr-dropdown-active">
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
      <div className="single-mobile-curr-lang">
        <a className="mobile-account-active" href="#">
          My Account <i className="la la-angle-down" />
        </a>
        <div className="lang-curr-dropdown account-dropdown-active">
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
};

export default Header;
