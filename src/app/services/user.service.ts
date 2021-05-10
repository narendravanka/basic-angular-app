import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn = false;
  private _user = null;
  constructor() { }
  setUser(user: any){
    this._user = user;
  }
  getUser(){
    return this._user;
  }
  setLogInStatus(loggedIn: boolean){
    this.isLoggedIn = loggedIn;
  }
}
