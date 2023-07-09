import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'second-quiz',
  templateUrl: './second-quiz.component.html',
  styleUrls: ['./second-quiz.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SecondQuizComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToNextScreen() {
    this.router.navigate(['/wrong']);
  }
  
}