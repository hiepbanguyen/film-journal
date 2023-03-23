import axios from "axios";
import ConstantURL from "./resources/ConstantURL";

const BASE_URL = ConstantURL.BaseDomain;
// Set the token header for every request
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

// Check for token in local storage and set header
if (localStorage.token) {
  let token = JSON.parse(JSON.stringify(localStorage.token));
  setAuthToken(token.slice(1, -1));
}

// API methods
const baseAPI = {
  getAsync: async (url, config = {}) => await axios.get(`${BASE_URL}${url}`, config),
  postAsync: async (url, data, config = {}) => await axios.post(`${BASE_URL}${url}`, data, config),
  putAsync: async (url, data, config = {}) => await axios.put(`${BASE_URL}${url}`, data, config),
  deleteAsync: async (url, config = {}) => await axios.delete(`${BASE_URL}${url}`, config),
};

export default baseAPI;
