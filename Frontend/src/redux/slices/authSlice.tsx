import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async (params: { email: string; password: string }) => {
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
    builder.addCase(fetchAuth.pending, (state) => {
      state.data = null;
      state.status = "loading";
      state.isAuthenticated = true;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.data = null;
      state.status = "error";
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
