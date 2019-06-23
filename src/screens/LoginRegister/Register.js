import React from "react";

const Register = () => {
  return (
    <div id="lg2" class="tab-pane">
      <div class="login-form-container">
        <div class="login-register-form">
          <form action="#" method="post">
            <input type="text" name="user-name" placeholder="Username" />
            <input
              type="password"
              name="user-password"
              placeholder="Password"
            />
            <input name="user-email" placeholder="Email" type="email" />
            <div class="button-box">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
