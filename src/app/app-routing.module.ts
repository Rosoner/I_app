import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthLoginActivate } from './home/guard/auth.login.activate';
import { ProfileComponent } from './profile/profile.component';
import { AuthActivate } from './home/guard/auth.activate';
import { NewMovieComponent } from './movies/new-movie/new-movie.component';
import { MyMoviesComponent } from './movies/my-movies/my-movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      {
        path: 'new-movie',
        component: NewMovieComponent,
        canActivate: [AuthActivate],
      },
      {
        path: 'my-movies',
        component: MyMoviesComponent,
        canActivate: [AuthActivate],
      },
      {
        path: ':id',
        component: MovieComponent,
      },
      {
        path: 'my-movies/:id',
        component: MovieComponent,
      }
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthLoginActivate],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthLoginActivate],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthActivate],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}