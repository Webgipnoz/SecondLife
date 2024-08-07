import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";

import { fetchPosts } from "../../redux/slices/postSlice";

import Header from "../../components/Header/Header";
import PostFilter from "../../components/PostFilter/PostFilter";
import PostBlock from "../../components/PostBlock/PostBlock";
import SkeletonBlock from "../../components/PostBlock/SkeletonBlock";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.posts);
  const activeFilter = useSelector((state: RootState) => state.filter.idFilter);
  const isPostsLoading = posts.status === "loading";

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filteredPosts = posts.items.filter((post) =>
    activeFilter === 0 ? true : post.category === activeFilter
  );

  return (
    <>
      <Header />
      <PostFilter />
      <Tabs
        style={{ marginBottom: 15 }}
        value={0}
        aria-label="basic tabs example"
      >
        <Tab label="New" />
        <Tab label="Popular" />
      </Tabs>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={4} style={{ maxWidth: "80%" }}>
          <Grid xs={8} item>
            {(isPostsLoading ? [...Array(5)] : filteredPosts).map(
              (obj, index) =>
                isPostsLoading ? (
                  <SkeletonBlock key={index} />
                ) : (
                  <PostBlock
                    isLoading={false}
                    key={index}
                    _id={obj._id}
                    title={obj.title}
                    category={obj.category}
                    imageUrl={obj.imageUrl}
                    text={obj.text}
                    fullName={obj.fullName}
                    createdAt={obj.createdAt}
                    user={obj.user}
                    viewsCount={obj.viewsCount}
                    commentsCount={obj.commentsCount}
                  />
                )
            )}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default HomePage;
