import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = 'admin';
  password: string = 'password';
  loginError: boolean = false;

  constructor(private router: Router, private loginService: LoginService) { }

  onSubmit(): void {
    const isLoggedIn = this.loginService.login(this.username, this.password);

    if (isLoggedIn) {
      this.router.navigate(['/profile']);
    } else {
      this.loginError = true;
    }
  }
}
