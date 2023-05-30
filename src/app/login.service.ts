import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn: boolean = false;
  private username: string = '';

  login(username: string, password: string): boolean {
    // Simulate login authentication logic
    if (username === 'admin' && password === 'password') {
      this.loggedIn = true;
      this.username = username;
      return true;
    }

    return false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  getUsername(): string {
    return this.username;
  }
}
