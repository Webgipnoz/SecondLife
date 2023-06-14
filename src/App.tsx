import React, { useState, useEffect } from "react";
import { Provider } from "react-redux/es/exports";

import Header from "./components/Header/Header";
import PostFilter from "./components/PostFilter/PostFilter";
import PostBlock from "./components/PostBox/PostBlock";
import SkeletonBlock from "./components/PostBox/SkeletonBlock";
import store from "./redux/store";

import posts from "./posts.json";
import "./scss/index.scss";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Provider store={store}>
      <Header />
      <PostFilter />
      <section className="post container">
        {/* {isLoading
          ? [...new Array(6)].map((_, i) => <SkeletonBlock key={i} />)
          : {posts.map((obj) => (
          <PostBlock key={obj.id} {...obj} />
        ))}*/}
        {posts.map((obj) => (
          <PostBlock key={obj.id} {...obj} />
        ))}
      </section>
    </Provider>
  );
}

export default App;
