import { makeAutoObservable } from "mobx";
import { StorageHelper } from "../utils/storage.js";

class UserStore {
  _user = null;
  _token = null;
  _isLoadedFromLocal = false;

  constructor() {
    makeAutoObservable(this);
  }

  get user() {
    return this._user;
  }

  get token() {
    return this._token;
  }

  get isLoggedIn() {
    return !!this._token;
    // return true;
  }

  get isLoadedFromLocal() {
    return this._isLoadedFromLocal;
  }

  updateAvatar(url) {
    this._user.Avatar = url;
    StorageHelper.setUser(this._user);
  }

  loadFromLocal() {
    if (typeof window == "undefined") {
      return;
    }
    console.log("loadFromLocal: ", this._isLoadedFromLocal);
    if (this._isLoadedFromLocal) {
      return;
    }
    this._isLoadedFromLocal = true;
    if (this._token) {
      return;
    }
    const userLocal = StorageHelper.getUser();
    if (userLocal) {
      this._user = userLocal;
    }
    const tokenLocal = StorageHelper.getToken();
    if (tokenLocal && tokenLocal !== "") {
      this._token = tokenLocal;
      // axios.defaults.headers.common["Authorization"] = tokenLocal;
    }
    return {
      user: this.user,
      token: this.token,
      isLogged: this.isLoggedIn,
    };
  }

  saveLoginInfo(token, user) {
    this._user = user;
    this._token = token;
    StorageHelper.setToken(this._token);
    StorageHelper.setUser(this._user);
    // axios.defaults.headers.common["Authorization"] = token;
  }

  logout() {
    this._user = null;
    this._token = null;
    StorageHelper.clearSession();
    // delete axios.defaults.headers.common["Authorization"];
  }
}

export default new UserStore();
