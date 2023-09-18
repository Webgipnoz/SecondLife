import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

import { Post } from "../../types/post";
import { apiService } from "../../api/index";
import { fetchPosts } from "../../redux/slices/postSlice";

//import { postsService } from "../../services/postsService";

import Header from "../../components/Header/Header";
import PostFilter from "../../components/PostFilter/PostFilter";
import PostBlock from "../../components/PostBlock/PostBlock";
import SkeletonBlock from "../../components/PostBlock/SkeletonBlock";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.post);
  const isPostsLoading = posts.status === "loading";

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  // const getPosts = () => {
  //   postsService.fetchPosts().then(async (res) => {
  //     let response = await res.json();
  //     setData(response);
  //     setIsLoading(false);
  //   });
  // };

  return (
    <>
      <Header />
      <PostFilter />
      <section className="post container">
        {isPostsLoading
          ? [...new Array(6)].map((_, i) => <SkeletonBlock key={i} />)
          : posts.items?.map((obj, index) => (
              <PostBlock post={obj} key={index} />
            ))}
      </section>
    </>
  );
};

export default Home;
