import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import "../../scss/header/header.scss";

const Header: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <>
      <div className="header">
        <div className="nav container">
          <Link to="/" className="logo">
            Second<span>Life</span>
          </Link>
          {isAuthenticated === true ? (
            <Link to="/auth/account" className="login">
              My Account
            </Link>
          ) : (
            <Link to="/auth/login" className="login">
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
