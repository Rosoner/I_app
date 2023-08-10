import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { MovieComponent } from './movie/movie.component';
import { HomeComponent } from '../home/home.component';
import { AuthActivate } from '../home/guard/auth.activate';
import { MyMoviesComponent } from './my-movies/my-movies.component';

const routes: Routes = [
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
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
