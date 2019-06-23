import React from "react";
import { Link } from "react-router-dom";

const NavigationMobile = () => {
  return (
    <nav>
      <ul className="mobile-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="menu-item-has-children ">
          <Link to="#">shop</Link>
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
                    fullwide no sidebar
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
                  <a href="shop-list-no-sidebar.html">list no sidebar</a>
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
                  <a href="product-details-gallery.html">gallery style </a>
                </li>
                <li>
                  <a href="product-details-sticky.html">sticky style</a>
                </li>
                <li>
                  <a href="product-details-slider.html">slider style</a>
                </li>
                <li>
                  <a href="product-details-affiliate.html">Affiliate style</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/shop">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMobile;
