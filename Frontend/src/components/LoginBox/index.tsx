import React from "react";

import "../../scss/login/login.scss";
import { Link } from "react-router-dom";

const LoginBox = () => {
  return (
    <div className="centered-content">
      <div className="login-form">
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            id="username"
            placeholder="
              enter your username"
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="
              enter your password"
          />{" "}
        </div>
        <button className="submit-button">Sign In</button>
        <button className="submit-button">
          <Link to="/register">Sign Up</Link>
        </button>
      </div>
    </div>
  );
};

export default LoginBox;
