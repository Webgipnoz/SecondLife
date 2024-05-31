import { useState, useEffect } from "react";
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

const getAvatarLetter = (fullName: string) => {
  const firstName = fullName.split(" ")[0];
  return firstName.charAt(0).toUpperCase();
};

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.posts);
  const isPostsLoading = posts.status === "loading";

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

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
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)] : posts.items).map((obj, index) =>
            isPostsLoading ? (
              <PostBlock key={index} isLoading={true} />
            ) : (
              <PostBlock
                isLoading={false}
                key={index}
                id={obj.id}
                title={obj.title}
                category={obj.category}
                imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
                description={obj.description}
                profileName={obj.profileName}
                createdAt={obj.createdAt}
                user={obj.user}
                viewsCount={obj.viewsCount}
                commentsCount={obj.commentsCount}
              />
            )
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
