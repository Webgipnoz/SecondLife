import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { logout, selectIsAuth } from "../../redux/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm("Are you sure y wanna logout?")) {
      dispatch(logout());
    }
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.nav}>
          <Link to="/" className={styles.logo}>
            Second<span>Life</span>
          </Link>
          <div className={styles.buttonsContainer}>
            {isAuth ? (
              <>
                <Link to="/addPost" className={styles.login}>
                  Add Post
                </Link>
                <Link to="#" onClick={onClickLogout} className={styles.login}>
                  Log Out
                </Link>
              </>
            ) : (
              <>
                <Link to="/auth/register" className={styles.login}>
                  Register
                </Link>
                <Link to="/auth/login" className={styles.login}>
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
        <section className={styles.home} id={styles.home}>
          <div className={styles.homeText}>
            <h2 className={styles.homeTitle}>SecondLife Blog</h2>
            <span className={styles.homeSubtitle}>
              Your guide to the world of emigration
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
