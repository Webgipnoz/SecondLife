import { apiService } from "../api";

const fetchPosts = () => {
  return apiService.get();
};

export const postsService = {
  fetchPosts,
};
