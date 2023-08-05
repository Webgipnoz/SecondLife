import { apiService } from "../api";
import { Post } from "../types/post";

const fetchPosts = () => {
  return apiService.getPosts();
};

const getPost = async (id: number): Promise<Post> => {
  const response = (await (await fetchPosts()).json()) as any[];
  let post = response.filter((item) => item.id === +id);
  return post[0] as Post;
};

export const postsService = {
  fetchPosts,
  getPost,
};
