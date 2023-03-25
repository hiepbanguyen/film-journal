import { makeAutoObservable } from "mobx";

class AuthStoreMobx {
  _verified = false;
  _authModal = false;
  _sentEmailVerify = false;

  constructor() {
    makeAutoObservable(this);
  }

  get verified() {
    return this._verified;
  }

  set verified(value) {
    this._verified = value;
  }

  get authModal() {
    return this._authModal;
  }

  set authModal(value) {
    this._authModal = value;
  }

  get sentEmailVerify() {
    return this._sentEmailVerify;
  }

  set sentEmailVerify(value) {
    this._sentEmailVerify = value;
  }
}

const AuthStore = new AuthStoreMobx();
export default AuthStore;
