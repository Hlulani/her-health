import { WrongQuastionnareComponent } from './wrong-quastionnare/wrong-quastionnare.component';
import { WrongComponent } from './wrong/wrong.component';
import { RightComponent } from './right/right.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { SignupComponent } from './signup/signup.component';
import { QuizComponent } from './quiz/quiz.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'right', component: RightComponent },
  { path: 'wrong', component: WrongComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'second-quiz', component: WrongQuastionnareComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
