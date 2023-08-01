import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewMovieComponent,
    SingleMovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule
  ]
})
export class MovieModule { }
