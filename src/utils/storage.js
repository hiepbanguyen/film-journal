import axios from "axios";
export const isClient = typeof window !== "undefined";

export const StorageHelper = {
  clearSession() {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  },
  getToken: () => {
    return JSON.parse(JSON.stringify(localStorage.getItem("token")));
  },
  setToken: (token) => {
    localStorage.setItem("token", token);
    axios.defaults.headers.common["Authorization"] = token;
  },
  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  },
  getUser: () => {
    try {
      if (!localStorage) {
        return;
      }
      const _result = JSON.stringify(localStorage.getItem("user"));
      return _result != null && _result !== "" ? JSON.parse(_result) : undefined;
    } catch (err) {
      console.log("error parse user: ");
    }
  },
};
