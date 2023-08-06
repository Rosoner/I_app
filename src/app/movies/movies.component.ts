import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../types/movie';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  isLoading: boolean = false;
  movies: Movie[] = [];

  constructor(private api: ApiService, private userService: UserService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.api.getMovies().subscribe({
      next: (response) => {
        this.movies = response;
        this.isLoading = false;
      },
      error: (error) => {
        this.userService.showMessage(error.error.message);
      },
    });
  }
}
