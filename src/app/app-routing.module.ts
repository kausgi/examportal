import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { UpdateCategoryComponent } from './pages/admin/update-category/update-category.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { QuizInstructionComponent } from './pages/user/quiz-instruction/quiz-instruction.component';
import { QuizStartComponent } from './pages/user/quiz-start/quiz-start.component';


const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'add-category',
        component: AddCategoryComponent
      },
      {
        path: 'categories',
        component:ViewCategoriesComponent,
      },
      {
        path: 'view-quizzes',
        component: ViewQuizzesComponent
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent
      },
      {
        path: 'quiz/:id',
        component:UpdateQuizComponent
      },
      {
        path: 'view-questions/:id/:title',
        component:ViewQuizQuestionsComponent
      },
      {
        path: 'add-question/:id/:title',
        component: AddQuestionComponent
      },
      {
        path: 'question/:id',
        component: UpdateQuestionComponent
      },
      {
        path: 'category/:id',
        component: UpdateCategoryComponent
      }

      ]
    },

  {
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [UserGuard],
    children:[
      // {
      //   path: '',
      //   component: LoadQuizComponent
      // },
      {
        path: ':id',
        component: LoadQuizComponent
      },
      {
        path:'instruction/:id',
        component: QuizInstructionComponent
      },

    ]
  },
  {
        path: 'quiz-start/:id',
        component: QuizStartComponent,
        canActivate: [UserGuard],
      }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
