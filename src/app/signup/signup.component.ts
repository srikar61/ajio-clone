import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private loginService: LoginService) { }

  onSubmit(): void {
    // Perform signup logic (e.g., send data to server, create account, etc.)

    // After successful signup, login the user and redirect to the profile page
    const isLoggedIn = this.loginService.login(this.username, this.password);

    if (isLoggedIn) {
      this.router.navigate(['/profile']);
    }
  }
}
