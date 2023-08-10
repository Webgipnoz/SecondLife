const getPosts = () => {
  const path = "http://localhost:5000/?path=posts";
  return fetch(path);
};

export const apiService = {
  getPosts,
};
