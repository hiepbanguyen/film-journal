import Storage from "react-secure-storage";
export const isClient = typeof window !== "undefined";

export const StorageHelper = {
  clearSession() {
    Storage.removeItem("token");
  },
  getToken: () => {
    return Storage.getItem("token").toString();
  },
  setToken: (token) => {
    Storage.setItem("token", token);
  },
  setUser: (user) => {
    Storage.setItem("user", JSON.stringify(user));
  },
  getUser: () => {
    try {
      if (!localStorage) {
        return;
      }
      const _result = Storage.getItem("user").toString();
      return _result != null && _result !== "" ? JSON.parse(_result) : undefined;
    } catch (err) {
      console.log("error parse user: ");
    }
  },
};
