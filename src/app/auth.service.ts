import { Injectable } from '@angular/core';
import { User } from './user';
import { USER } from './mock-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(user: User) {
    // if (user.username === 'admin' && user.password === '123') {
    //   localStorage.setItem('ACCESS_TOKEN', 'access_token');
    //   return true;
    // }
    USER.forEach(usr => {
      if (usr.username === user.username && usr.password === user.password) {
        console.log(usr.username + '  ' + usr.password);
        localStorage.setItem('ACCESS_TOKEN', 'access_token');
        return true;
      }
    });
    return false;
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
