export class User {
  get lastLogin() {
    return this._lastLogin;
  }

  constructor(private _lastLogin: Date) {}

  login() {
    this._lastLogin = new Date();
  }
}
