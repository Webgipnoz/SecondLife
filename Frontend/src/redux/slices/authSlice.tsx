import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (params) => {
    const { data } = await axios.post("/auth/login", params);
    return data;
  }
);

export interface AuthSlice {
  data: any;
  status: string;
  isAuthenticated: boolean;
}

const initialState: AuthSlice = {
  data: null,
  status: "loading",
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.data = null;
      state.status = "loading";
      state.isAuthenticated = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchUserData.rejected, (state) => {
      state.data = null;
      state.status = "error";
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
