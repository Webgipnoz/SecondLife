import React from "react";

import "./scss/home.scss";

function App() {
  return (
    <>
      {/* Header */}

      <header>
        <div className="nav container">
          <a href="#" className="logo">
            Second<span>Life</span>
          </a>
          <a href="#" className="login">
            Login
          </a>
        </div>
      </header>
      <section className="home" id="home">
        <div className="home-text container">
          <h2 className="home-title">SecondLife Blog</h2>
          <span className="home-subtitle">
            Your guide to the world of emigration
          </span>
        </div>
      </section>

      {/* Post Filter */}
      <div className="post-filter container">
        <span className="filter-item active-filter" data-filter="all">
          All
        </span>
        <span className="filter-item" data-filter="documents">
          Documents
        </span>
        <span className="filter-item" data-filter="help">
          Help
        </span>
        <span className="filter-item" data-filter="family">
          Family
        </span>
      </div>

      {/* Posts */}
      <section className="post container">
        {/* Post 1 */}
        <div className="post-box">
          <img src="img/post1.jpg" alt="#" className="post-img"></img>
          <h2 className="categoty">Documents</h2>
          <a href="#" className="post-title">
            How to start your move
          </a>
          <span className="post-date">12 Feb 2023</span>
          <p className="post-decription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            dolorem illum distinctio mollitia a nostrum vero, maxime eaque!
            Autem minima labore, tempore dolorem quo nisi.
          </p>
          {/* Profile */}
          <div className="profile">
            <img className="profile-img" src="img/profile1.jpg"></img>
            <span className="profile-name">Ivan Petrov</span>
          </div>
        </div>

        {/* Post 2 */}
        <div className="post-box">
          <img src="img/post2.jpg" alt="#" className="post-img"></img>
          <h2 className="categoty">Help</h2>
          <a href="#" className="post-title">
            How to start your move
          </a>
          <span className="post-date">12 Feb 2023</span>
          <p className="post-decription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            dolorem illum distinctio mollitia a nostrum vero, maxime eaque!
            Autem minima labore, tempore dolorem quo nisi.
          </p>
          {/* Profile */}
          <div className="profile">
            <img className="profile-img" src="img/profile1.jpg"></img>
            <span className="profile-name">Ivan Petrov</span>
          </div>
        </div>

        {/* Post 3 */}
        <div className="post-box">
          <img src="img/post3.jpg" alt="#" className="post-img"></img>
          <h2 className="categoty">Family</h2>
          <a href="#" className="post-title">
            How to start your move
          </a>
          <span className="post-date">12 Feb 2023</span>
          <p className="post-decription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            dolorem illum distinctio mollitia a nostrum vero, maxime eaque!
            Autem minima labore, tempore dolorem quo nisi.
          </p>
          {/* Profile */}
          <div className="profile">
            <img className="profile-img" src="img/profile2.jpg"></img>
            <span className="profile-name">Ivan Petrov</span>
          </div>
        </div>

        {/* Post 4 */}
        <div className="post-box">
          <img src="img/post4.jpg" alt="#" className="post-img"></img>
          <h2 className="categoty">Help</h2>
          <a href="#" className="post-title">
            How to start your move
          </a>
          <span className="post-date">12 Feb 2023</span>
          <p className="post-decription">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            dolorem illum distinctio mollitia a nostrum vero, maxime eaque!
            Autem minima labore, tempore dolorem quo nisi.
          </p>
          {/* Profile */}
          <div className="profile">
            <img className="profile-img" src="img/profile3.jpg"></img>
            <span className="profile-name">Ivan Petrov</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
