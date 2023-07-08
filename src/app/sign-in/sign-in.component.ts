import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent  {

  name!: string;
  email!: string;
  password!: string;

  constructor(private router: Router) {}
  
  signin() {
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


  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
  
}
