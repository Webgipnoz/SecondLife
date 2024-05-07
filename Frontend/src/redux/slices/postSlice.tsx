import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../types/post";
import { apiService } from "../../api/index";
import axios from "../../api/axios";

export const fetchPosts = createAsyncThunk<Post[]>(
  "posts/fetchPosts",
  async () => {
    const data = await apiService.getPosts();
    return data as Post[];
  }
);

export interface PostSlice {
  posts: {
    items: Post[];
    status: string;
  };
}

export const fetchTags = createAsyncThunk("posts/fetchTags", async () => {
  const { data } = await apiService.getTags();
  return data;
});

const initialState: PostSlice = {
  posts: {
    items: [],
    status: "loading",
  },
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts.status = "loading";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = "loaded";
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.posts.items = [];
      state.posts.status = "error";
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
