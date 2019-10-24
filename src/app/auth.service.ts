import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';
import { USER } from './mock-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userUrl = 'api/users';

  constructor(private http: HttpClient) { }

  public login(user: User) {

    for (const userIterator of USER) {
      if (userIterator.username === user.username && userIterator.password === user.password) {
        return true;
      }
    }
    return false;
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('CURRENT_USER');
  }
}
