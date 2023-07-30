import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../types/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesList: Movie[] = [];
  isLoading: boolean = true;

  constructor (private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getMovies().subscribe({
      next: (movies) => {
      //  console.log(movies[0]);
      this.moviesList = movies;
      this.isLoading = false;
    },
      error: (err) => {
        this.isLoading = false;
        console.log(`Error: ${err}`);
      },
    });
  }
}