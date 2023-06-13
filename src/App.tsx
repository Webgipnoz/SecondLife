import React from "react";

import Header from "./components/Header/header";
import PostFilter from "./components/PostFilter/postFilter";
import PostBox from "./components/PostBox/postBox";

import "./scss/index.scss";

function App() {
  return (
    <>
      <Header />
      <PostFilter />
      {/* Posts */}
      <section className="post container">
        <PostBox
          img={"img/post1.jpg"}
          title={"How to start Your Way"}
          categoty={"Documents"}
          date={"12 Feb 2023"}
          decription={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremquedolorem illum distinctio mollitia a nostrum vero, maxime eaque!Autem minima labore, tempore dolorem quo nisi."
          }
          profileImg={"img/profile1.jpg"}
          profileName={"Ivan Petrov"}
        />
      </section>
    </>
  );
}

export default App;
