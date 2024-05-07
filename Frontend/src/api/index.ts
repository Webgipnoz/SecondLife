import axios from "./axios";

const getPosts = async () => {
  const res = await axios.get("/posts");
  return res.data;
};

const getTags = async () => {
  const res = await axios.get("/tags");
  return res.data;
};

export const apiService = {
  getPosts,
  getTags,
};
