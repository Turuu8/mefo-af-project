import axios from 'axios';
// "https://mepo-af-project-production.up.railway.app/api"
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
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
