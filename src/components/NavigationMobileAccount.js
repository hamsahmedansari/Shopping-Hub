import React from "react";

const NavigationMobileAccount = () => {
  return (
    <div className="mobile-curr-lang-wrap">
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
  );
};

export default NavigationMobileAccount;
