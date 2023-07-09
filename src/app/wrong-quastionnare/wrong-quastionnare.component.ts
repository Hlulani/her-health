
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Question, QUIZZES } from '../shared/quiz-data';

@Component({
  selector: 'app-wrong-quastionnare',
  templateUrl: './wrong-quastionnare.component.html',
  styleUrls: ['./wrong-quastionnare.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WrongQuastionnareComponent implements OnInit {
  quizzes: Question[][] = [];
  currentQuiz: Question[] = [];
  currentQuestion!: Question;
  currentIndex!: number;
  score!: number;
  quizCompleted: boolean = false;

  userProfile: any;
  constructor(private router: Router) {}


  ngOnInit() {
    
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      const userProfile = JSON.parse(storedProfile);
      this.userProfile = userProfile;
    } else {
      // Redirect to the signup page if user profile is not found
      this.router.navigate(['/signup']);
      return;
    }
    this.quizzes = QUIZZES;
    this.startQuiz(0); // Start with the first quiz

   
  }

  startQuiz(quizIndex: number) {
    this.currentQuiz = this.quizzes[quizIndex];
    this.currentIndex = 0;
    this.score = 0;
    this.quizCompleted = false;
    this.showQuestion();
  }

  showQuestion() {
    this.currentQuestion = this.currentQuiz[this.currentIndex];
  }

  selectAnswer(answer: string) {
    this.currentQuestion.userAnswer = answer; // Assign the user's answer to userAnswer property
  
    if (answer === this.currentQuestion.answer) {
      this.score++;
    }
  
    if (this.currentIndex < this.currentQuiz.length - 1) {
      this.currentIndex++;
      this.showQuestion();
    } else {
      // Quiz completed
      this.quizCompleted = true;
      this.currentQuestion = null!; // Clear the current question to show results

    }
  }


  navigateToNextScreen() {
    this.router.navigate(['/right']);
  }
  
}
