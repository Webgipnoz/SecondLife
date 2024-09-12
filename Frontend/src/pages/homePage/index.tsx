import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../redux/store";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";

import { fetchPosts } from "../../redux/slices/postSlice";

import PostFilter from "../../components/PostFilter/PostFilter";
import PostBlock from "../../components/PostBlock/PostBlock";
import SkeletonBlock from "../../components/PostBlock/SkeletonBlock";
import CommentsBlock from "../../components/CommentsBlock";

const HomePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth.data);
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
      <PostFilter />
      <Tabs
        style={{ marginBottom: 15 }}
        value={0}
        aria-label="basic tabs example"
      >
        <Tab label="New" />
        <Tab label="Popular" />
      </Tabs>
      <Grid container spacing={4} style={{ maxWidth: "80%" }}>
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)] : filteredPosts).map((obj, index) =>
            isPostsLoading ? (
              <SkeletonBlock key={index} />
            ) : (
              <PostBlock
                isLoading={false}
                key={index}
                _id={obj._id}
                title={obj.title}
                category={obj.category}
                imageUrl={
                  obj.imageUrl ? `http://localhost:5000${obj.imageUrl}` : ""
                }
                text={obj.text}
                fullName={obj.fullName}
                createdAt={obj.createdAt}
                user={obj.user}
                viewsCount={obj.viewsCount}
                commentsCount={obj.commentsCount}
                isEditable={userData?._id === obj.user._id}
              />
            )
          )}
        </Grid>
        <Grid xs={4} item>
          <CommentsBlock
            children={1}
            items={[
              {
                user: {
                  fullName: "Вася Пупкин",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                },
                text: "Это тестовый комментарий",
              },
              {
                user: {
                  fullName: "Иван Иванов",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                },
                text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
