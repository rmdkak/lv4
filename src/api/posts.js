import axios from "axios";

const getPosts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
  return response.data;
};

const getCategorys = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/categorys`
  );
  return response.data;
};

const addPosts = async (newPost) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/posts`, newPost);
};

const addCategory = async (newCategory) => {
  await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/categorys`,
    newCategory
  );
};

const deletePosts = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
};

const deleteCategory = async (id) => {
  await axios.delete(`${process.env.REACT_APP_SERVER_URL}/categorys/${id}`);
};

const patchPosts = async ({ id, editPost }) => {
  await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/posts/${id}`,
    editPost
  );
};

export {
  getPosts,
  addPosts,
  deletePosts,
  patchPosts,
  addCategory,
  getCategorys,
  deleteCategory,
};
