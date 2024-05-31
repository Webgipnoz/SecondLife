import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import postReducer from "./slices/postSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    posts: postReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
