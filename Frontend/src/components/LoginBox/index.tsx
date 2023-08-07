import React from "react";

import "../../scss/login/login.scss";

const LoginBox = () => {
  return (
    <div className="centered-content">
      <div className="login-form">
        <div className="input-group">
          <label>username</label>
          <input
            type="text"
            id="username"
            placeholder="
              enter your username"
          />
        </div>
        <div className="input-group">
          <label>password</label>
          <input
            type="password"
            id="password"
            placeholder="
              enter your password"
          />{" "}
        </div>
        <button className="submit-button">Enter</button>
        <button className="submit-button">Register</button>
      </div>
    </div>
  );
};

export default LoginBox;
