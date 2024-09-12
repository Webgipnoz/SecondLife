import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "../../api/axios";

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async (params: { email: string; password: string }) => {
    const { data } = await axios.post("/auth/login", params);
    return data;
  }
);

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.get("/auth/me");
  return data;
});

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
  reducers: {
    logout: (state) => {
      state.data = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    //fetchAuth
    builder.addCase(fetchAuth.pending, (state) => {
      state.data = null;
      state.status = "loading";
      state.isAuthenticated = true;
    });
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
      state.isAuthenticated = true;
    });
    builder.addCase(fetchAuth.rejected, (state) => {
      state.data = null;
      state.status = "error";
      state.isAuthenticated = false;
    });

    //fetchAuthMe
    builder.addCase(fetchAuthMe.pending, (state) => {
      state.data = null;
      state.status = "loading";
      state.isAuthenticated = true;
    });
    builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
      state.isAuthenticated = true;
    });
    builder.addCase(fetchAuthMe.rejected, (state) => {
      state.data = null;
      state.status = "error";
      state.isAuthenticated = false;
    });
  },
});

export const selectIsAuth = (state: RootState) => Boolean(state.auth.data);

export const { logout } = authSlice.actions;
export default authSlice.reducer;
