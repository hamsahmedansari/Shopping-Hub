import React from "react";

const Register = () => {
  return (
    <div id="lg2" className="tab-pane">
      <div className="login-form-container">
        <div className="login-register-form">
          <form action="#" method="post">
            <input type="text" name="user-name" placeholder="Username" />
            <input
              type="password"
              name="user-password"
              placeholder="Password"
            />
            <input name="user-email" placeholder="Email" type="email" />
            <div className="button-box">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
