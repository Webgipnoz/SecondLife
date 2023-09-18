import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../types/post";

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
});

export const {} = postSlice.actions;
export default postSlice.reducer;
