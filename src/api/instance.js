import axios from "axios";

const token = localStorage.getItem("token");

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 1000,
  headers: { Authorization: `Bearer ${token}` },
});

export default instance;
