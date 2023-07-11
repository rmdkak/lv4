import axios from "axios";

const getPosts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  return response.data;
};

const addPosts = async (newPost) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, newPost);
};

const deletePosts = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
};

const patchPosts = async ({ id, editPost }) => {
  console.log(id);
  console.log(editPost);
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/posts/${id}`,
    editPost
  );
};

export { getPosts, addPosts, deletePosts, patchPosts };
