import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  errorMessage = '';
  showPassword: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log(this.credentials);
    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        console.log(res); 
        localStorage.setItem('jwtToken', res);
        this.router.navigate(['/employees']);
      },
      error: (err) => {
        console.error('Login failed', err);
        this.errorMessage = 'Invalid email or password';
      }
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
