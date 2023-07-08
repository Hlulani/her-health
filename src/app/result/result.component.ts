import { Component, Input } from '@angular/core';
import { Question } from '../shared/quiz-data';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input()
  score!: number;
  @Input()
  currentQuiz!: Question[];

  userName!: string;

  ngOnInit() {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      const userProfile = JSON.parse(storedProfile);
      this.userName = userProfile.name;
    }
  }

  isCorrectAnswer(question: Question): boolean {
    return question.userAnswer === question.answer;
  }
}
