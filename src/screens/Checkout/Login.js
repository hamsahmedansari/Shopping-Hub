import React from "react";

const Login = () => {
  return (
    <div className="customer-zone mb-20">
      <p className="cart-page-title">
        Returning customer?{" "}
        <a className="checkout-click1" href="#">
          Click here to login
        </a>
      </p>
      <div className="checkout-login-info">
        <p>
          If you have shopped with us before, please enter your details in the
          boxes below. If you are a new customer, please proceed to the Billing
          & Shipping section.
        </p>
        <form action="#">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="sin-checkout-login">
                <label>
                  Username or email address <span>*</span>
                </label>
                <input type="text" name="user-name" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="sin-checkout-login">
                <label>
                  Passwords <span>*</span>
                </label>
                <input type="password" name="user-password" />
              </div>
            </div>
          </div>
          <div className="button-remember-wrap">
            <button className="button" type="submit">
              Login
            </button>
            <div className="checkout-login-toggle-btn">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
          </div>
          <div className="lost-password">
            <a href="#">Lost your password?</a>
          </div>
        </form>
        <div className="checkout-login-social">
          <span>Login with:</span>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Google</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
