import axios from "axios";
import ConstantURL from "./resources/ConstantURL";

const BASE_URL = ConstantURL.BaseDomain;

// API methods
const baseAPI = {
  getAsync: async (url, config = {}) => await axios.get(`${BASE_URL}${url}`, config),
  postAsync: async (url, data, config = {}) => await axios.post(`${BASE_URL}${url}`, data, config),
  putAsync: async (url, data, config = {}) => await axios.put(`${BASE_URL}${url}`, data, config),
  deleteAsync: async (url, config = {}) => await axios.delete(`${BASE_URL}${url}`, config),
};

export default baseAPI;
