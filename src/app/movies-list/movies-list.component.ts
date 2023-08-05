import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../types/movie';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  moviesList: Movie[] = [];
  isLoading: boolean = true;
  // thereAreNoPosts: boolean = false;

  constructor (
    private apiService: ApiService, 
    private userService: UserService
    ) {}

  get isLogged(): boolean {
      return this.userService.isLogged;
    }

  ngOnInit(): void {
    this.apiService.getMovies(5).subscribe({
      next: (movies) => {
      // console.log(movies[0]);
      this.moviesList = movies;

      // if (this.postsList.length === 0) {
        //   this.thereAreNoPosts = true;
        // }

      this.isLoading = false;
    
    },
      error: (err) => {
        this.isLoading = false;
        console.log(`Error: ${err}`);
      },
    });
  }
}