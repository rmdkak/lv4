import axios from "axios";
import instance from "./instance";

//게시물 CRUD
const getPosts = async () => {
  const response = await instance.get("/posts");
  return response.data;
};

const addPosts = async (newPost) => {
  const { data } = await instance.post("/posts", newPost);
  // 성공하면 성공했다는 flag값 하나는 무조건 전달해줌
  return data;
};

const deletePosts = async (id) => {
  await instance.delete(`/posts/${id}`);
};

const patchPosts = async ({ id, editPost }) => {
  await instance.patch(`/posts/${id}`, editPost);
};

//카테고리 CRD
const getCategorys = async () => {
  const response = await instance.get("/categorys");
  return response.data;
};

const addCategory = async (newCategory) => {
  await instance.post("/categorys", newCategory);
};

const deleteCategory = async (id) => {
  await instance.delete(`/categorys/${id}`);
};

//회원가입
const signUpUser = async (signUpData) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_LOGIN_URL}/register`,
    signUpData
  );
  return data;
};

const loginUser = async (logInData) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_LOGIN_URL}/login`,
    logInData
  );
  return data;
};

const getUser = async () => {
  const token = JSON.parse(localStorage.getItem("token"))?.token;
  if (token === undefined) return;
  const { data } = await axios.get(`${process.env.REACT_APP_LOGIN_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export {
  getPosts,
  addPosts,
  deletePosts,
  patchPosts,
  addCategory,
  getCategorys,
  deleteCategory,
  signUpUser,
  loginUser,
  getUser,
};
