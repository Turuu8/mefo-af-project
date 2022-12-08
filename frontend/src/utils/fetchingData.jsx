import axios from "axios";

const API = axios.create({
  baseURL: "https://mepo-af-project-production.up.railway.app/api",
  // baseURL: "http://localhost:5000/api",
  withCredentials: true,
});
export const authAPI = async (url, data) => {
  return await API.post(url, data);
};
export const patchAPI = async (url, data) => {
  return await API.patch(url, data);
};
export const getAPI = async (url) => {
  return await API.get(url);
};
export const deleteAPI = async (url) => {
  return await API.delete(url);
};
export const authorPostAPI = async (url, data, token) => {
  return await API.post(url, data, { headers: { Authorization: token } });
};
export const authorGetAPI = async (url, token) => {
  return await API.get(url, { headers: { Authorization: token } });
};
