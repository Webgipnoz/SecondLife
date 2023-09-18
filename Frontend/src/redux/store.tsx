import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterSlice";
import postReducer from "./slices/postSlice";

const store = configureStore({
  reducer: {
    filter: filterReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
