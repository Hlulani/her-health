import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionnaireComponent {
  age!: number;
  gender!: string;
  location!: string;
  weight!: string;
  lifestyle!: string;
  genetic!: string;
  height!: string;
  health!: string;


  constructor(private router: Router) {}


  submitQuestionnaire() {
    // Update the user profile in local storage with questionnaire information
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      const profile = JSON.parse(storedProfile);
      profile.age = this.age;
      profile.gender = this.gender;
      profile.location = this.location;
      localStorage.setItem('userProfile', JSON.stringify(profile));
    }
    
    // Navigate to the quiz page
    this.router.navigate(['/quiz']);
  }
}
