import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "../../scss/header/header.scss";

const Header: React.FC = () => {
  const [isAuth, setIsAuth] = useState(true);

  const onClickLogout = () => {
    setIsAuth(!isAuth);
  };

  return (
    <>
      <div className="header">
        <div className="nav container">
          <Link to="/" className="logo">
            Second<span>Life</span>
          </Link>
          <div className="buttons-container">
            {isAuth ? (
              <>
                <Link to="/addPost" className="login">
                  Add Post
                </Link>
                <Link to="#" onClick={onClickLogout} className="login">
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link to="/auth/register" className="login">
                  Register
                </Link>
                <Link
                  to="/auth/login"
                  onClick={onClickLogout}
                  className="login"
                >
                  Login
                </Link>
              </>
            )}
          </div>
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
