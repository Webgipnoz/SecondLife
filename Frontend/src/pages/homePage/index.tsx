import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

import { Post } from "../../types/post";
import { fetchPosts } from "../../redux/slices/postSlice";

import Header from "../../components/Header/Header";
import PostFilter from "../../components/PostFilter/PostFilter";
import PostBlock from "../../components/PostBlock/PostBlock";
import SkeletonBlock from "../../components/PostBlock/SkeletonBlock";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.post);
  const isPostsLoading = posts.status === "loading";

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <Header />
      <PostFilter />
    </>
  );
};

export default HomePage;
