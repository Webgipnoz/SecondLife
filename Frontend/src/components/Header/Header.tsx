import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

import "../../scss/header/header.scss";

const Header = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <>
      <div className="header">
        <div className="nav container">
          <Link to="/" className="logo">
            Second<span>Life</span>
          </Link>
          {!isLogin && (
            <Link to="/login" className="login">
              Login
            </Link>
          )}
        </div>
        <section className="home" id="home">
          <div className="home-text container">
            <h2 className="home-title">SecondLife Blog</h2>
            <span className="home-subtitle">
              Your guide to the world of emigration
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
