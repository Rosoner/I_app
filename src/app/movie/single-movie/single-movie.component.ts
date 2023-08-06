import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Movie } from 'src/app/types/movie';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  movie: Movie | undefined;

  loggedInUser: string | null = ''; // Del

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.fetchMovie();
  }

  fetchMovie(): void {
    const id = this.activatedRoute.snapshot.params['movieId'];

    this.apiService.getMovie(id).subscribe((movie) => {
      this.movie = movie;
      console.log({ movie });
    });
  }

  // deleteMovie() {
  //   // if (!localStorage.getItem('accessToken')) {
  //   //   this.userService.isLoggedIn = false;
  //   //   this.router.navigate(['/']);
  //   // }

  //  // const id = this.activatedRoute.snapshot.params['movieId'];
  //   const id = this.activatedRoute.snapshot.params['_id'] // ok
  //   console.log(id)

  //   this.apiService.deleteMovie(id).subscribe({
  //     next: () => {
  //       // this.userService.showMessage('Poem deleted successfully!');
  //       // this.router.navigate(['movies/']);
  //     },
  //     error: () => {
  //       console.log('Sorry') 
  //       // this.userService.showMessage(error.error.message);
  //     },
  //   });
  // }


  deleteMovie() {
   
    const id = this.activatedRoute.snapshot.params['_id'] // ok
    console.log(id)

    this.apiService.deleteMovie(id).subscribe((res) => {
      this.router.navigate(['/']);
    });
    
  }

}