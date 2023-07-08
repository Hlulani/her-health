import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignupComponent {
  name!: string;
  email!: string;
  password!: string;

  constructor(private router: Router) {}
  
  signup() {
    // Store the user profile in local storage
    const profile = {
      name: this.name,
      email: this.email,
      // Add any other profile information you want to collect
    };
    localStorage.setItem('userProfile', JSON.stringify(profile));
    
    // Navigate to the questionnaire page
    this.router.navigate(['/questionnaire']);
  }
}
