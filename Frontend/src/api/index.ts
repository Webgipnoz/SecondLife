import axios from "./axios";

const getPosts = () => {
  axios.get("/posts");
};

export const apiService = {
  getPosts,
};
