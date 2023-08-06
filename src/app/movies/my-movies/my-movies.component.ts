import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Movie } from 'src/app/types/movie';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.css'],
})
export class MyMoviesComponent implements OnInit {
  moviesList: Movie[] = [];
  isLoading: boolean = false;

  constructor(private api: ApiService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const user = localStorage.getItem('userId');
    this.fetchMyMovies(user);
    if (!localStorage.getItem('accessToken')) {
      this.userService.isLoggedIn = false;
      this.router.navigate(['/']);
    }
  }

  fetchMyMovies(userId: string | null): Movie[] | null {
    if (userId != null) {
      const user = localStorage.getItem('userId');
      this.isLoading = true;
      this.api.getUserMovies(user).subscribe({
        next: (response) => {
          this.moviesList = response;
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
          this.userService.showMessage(error.error.message);
        },
      });
    }

    return null;
  }

  
}
