import React from "react";

const Login = () => {
  return (
    <div class="customer-zone mb-20">
      <p class="cart-page-title">
        Returning customer?{" "}
        <a class="checkout-click1" href="#">
          Click here to login
        </a>
      </p>
      <div class="checkout-login-info">
        <p>
          If you have shopped with us before, please enter your details in the
          boxes below. If you are a new customer, please proceed to the Billing
          & Shipping section.
        </p>
        <form action="#">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="sin-checkout-login">
                <label>
                  Username or email address <span>*</span>
                </label>
                <input type="text" name="user-name" />
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <div class="sin-checkout-login">
                <label>
                  Passwords <span>*</span>
                </label>
                <input type="password" name="user-password" />
              </div>
            </div>
          </div>
          <div class="button-remember-wrap">
            <button class="button" type="submit">
              Login
            </button>
            <div class="checkout-login-toggle-btn">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
          </div>
          <div class="lost-password">
            <a href="#">Lost your password?</a>
          </div>
        </form>
        <div class="checkout-login-social">
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
