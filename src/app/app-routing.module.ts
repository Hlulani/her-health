import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { SignupComponent } from './signup/signup.component';
import { QuizComponent } from './quiz/quiz.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
