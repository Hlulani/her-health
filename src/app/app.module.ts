import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ServicesComponent } from './services/services.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { ResultComponent } from './result/result.component';
import { ScoreComponent } from './score/score.component';
import { SignupComponent } from './signup/signup.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { FormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';
import { RightComponent } from './right/right.component';
import { WrongComponent } from './wrong/wrong.component';
import { WrongQuastionnareComponent } from './wrong-quastionnare/wrong-quastionnare.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    QuizComponent,
    QuestionComponent,
    ResultComponent,
    ScoreComponent,
    SignupComponent,
    QuestionnaireComponent,
    SignInComponent,
    RightComponent,
    WrongComponent,
    WrongQuastionnareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
