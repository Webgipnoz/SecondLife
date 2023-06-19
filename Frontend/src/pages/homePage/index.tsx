import React, { useState, useEffect } from "react";

import Header from "../../components/Header/Header";
import PostFilter from "../../components/PostFilter/PostFilter";
import PostBlock from "../../components/PostBlock/PostBlock";
import SkeletonBlock from "../../components/PostBlock/SkeletonBlock";
import { Post } from "../../types/post";
import { postsService } from "../../services/postsService";

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<Post[]>();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    postsService.fetchPosts().then(async (res) => {
      let response = await res.json();
      setData(response);
      setIsLoading(false);
    });
  };

  return (
    <>
      <Header />
      <PostFilter />
      <section className="post container">
        {isLoading && !data
          ? [...new Array(6)].map((_, i) => <SkeletonBlock key={i} />)
          : data?.map((obj) => <PostBlock post={obj} key={obj.id} />)}
      </section>
    </>
  );
};

export default Home;
