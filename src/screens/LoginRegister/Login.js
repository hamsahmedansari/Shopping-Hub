import React from "react";

const Login = () => {
  return (
    <div id="lg1" class="tab-pane active">
      <div class="login-form-container">
        <div class="login-register-form">
          <form action="#" method="post">
            <input type="text" name="user-name" placeholder="Username" />
            <input
              type="password"
              name="user-password"
              placeholder="Password"
            />
            <div class="button-box">
              <div class="login-toggle-btn">
                <input type="checkbox" />
                <label>Remember me</label>
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
