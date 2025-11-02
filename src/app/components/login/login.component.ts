import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = 'demo@predora.ai';
  password = 'demo';

  constructor(private router: Router) {}

  login() {
    // Demo login - always succeeds
    this.router.navigate(['/dashboard']);
  }
}
