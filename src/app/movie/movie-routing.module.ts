import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { NewMovieComponent } from './new-movie/new-movie.component';

const routes: Routes = [
  {
    path: 'movies',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent,
      },
      {
        path: ':movieId',
        component: SingleMovieComponent,
      },
    ],
  },
  {
    path: 'add-movie',
    component: NewMovieComponent,
    canActivate: [AuthActivate],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
