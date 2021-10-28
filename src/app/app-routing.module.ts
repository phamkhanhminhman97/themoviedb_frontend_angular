import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ErrorsComponent } from './errors/errors.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoadingComponent } from './_shared/loading/loading.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movies/:id', component: MovieDetailComponent},

  { path: '404', component: ErrorsComponent },
  // { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
