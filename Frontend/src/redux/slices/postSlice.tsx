import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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

export const fetchRemovePost = createAsyncThunk<number, number>(
  "posts/fetchRemovePost",
  async (id) => axios.delete(`/posts/${id}`)
);

export interface PostSlice {
  posts: {
    items: Post[];
    status: string;
  };
}

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
    // get post
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
    // delete post
    builder.addCase(fetchRemovePost.fulfilled, (state, action) => {
      state.posts.items = state.posts.items.filter(
        (obj) => obj._id !== action.meta.arg
      );
    });
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
