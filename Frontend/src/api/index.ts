import axios from "./axios";

const getPosts = async () => {
  const res = await axios.get("/posts");
  return res.data;
};

export const apiService = {
  getPosts,
};
