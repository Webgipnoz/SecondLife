import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  const [isAuth, setIsAuth] = useState(true);

  const onClickLogout = () => {
    setIsAuth(!isAuth);
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
