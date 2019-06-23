import React from "react";
import { Link } from "react-router-dom";

const NavigationMobileAccount = () => {
  return (
    <div className="mobile-curr-lang-wrap">
      <div className="single-mobile-curr-lang">
        <Link className="mobile-account-active" to="/profile">
          My Account <i className="la la-angle-down" />
        </Link>
        <div className="lang-curr-dropdown account-dropdown-active">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Creat Account</Link>
            </li>
            <li>
              <Link to="/profile">My Account</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationMobileAccount;
