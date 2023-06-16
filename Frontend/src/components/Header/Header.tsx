import React from "react";

import "../../scss/header/header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="nav container">
          <a href="#" className="logo">
            Second<span>Life</span>
          </a>
          <a href="#" className="login">
            Login
          </a>
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
