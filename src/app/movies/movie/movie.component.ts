import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Movie } from 'src/app/types/movie';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @ViewChild('editMovieForm') editMovieForm: NgForm | undefined;

  movie: Movie = {
    movieName: '',
    image: '',
    movieGenre: '',
    movieProducer: '',
    summary: '',
    content: '',
    username: '',
    _id: '',
    _ownerId: '',
  };

  // movieDataBuffer: Movie = {
  //   movieName: '',
  //   image: '',
  //   movieGenre: '',
  //   movieProducer: '',
  //   summary: '',
  //   content: '',
  //   username: '',
  //   _id: '',
  //   _ownerId: '',
  // };

  isLoading = false;
  loggedInUser: string | null = '';
  editingMovie: boolean = false;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchMovie();
    this.loggedInUser = localStorage.getItem('userId');
    this.editingMovie = false;
  }

  fetchMovie(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    const form = this.editMovieForm;

    this.apiService.getMovie(id).subscribe({
      next: (response) => {
        this.movie = response;
        this.isLoading = false;
      },
      error: (error) => {
        this.userService.showMessage(error.error.message);
      },
    });
  }

  deleteMovie(): void {
    if (!localStorage.getItem('accessToken')) {
      this.userService.isLoggedIn = false;
      this.router.navigate(['/']);
    }

    const id = this.activatedRoute.snapshot.params['id'];

    this.apiService.deleteMovie(id).subscribe({
      next: (response) => {
        this.userService.showMessage('Movie deleted successfully!');
        this.router.navigate(['movies/my-movies']);
      },
      error: (error) => {
        this.userService.showMessage(error.error.message);
      },
    });
  }

  toggleEditing(): void {
    if (!localStorage.getItem('accessToken')) {
      this.userService.isLoggedIn = false;
      this.router.navigate(['/']);
    }

    if (!this.editingMovie) {
      this.editingMovie = true;
    } else if (this.editingMovie) {
      this.editingMovie = false;
    }

  setTimeout(() => {
      if (this.editingMovie) {
        this.editMovieForm?.controls['movieName'].setValue(this.movie.movieName);
        this.editMovieForm?.controls['image'].setValue(this.movie.image);
        this.editMovieForm?.controls['movieGenre'].setValue(this.movie.movieGenre);
        this.editMovieForm?.controls['movieProducer'].setValue(this.movie.movieProducer);
        this.editMovieForm?.controls['summary'].setValue(this.movie.summary);
        this.editMovieForm?.controls['content'].setValue(this.movie.content);
      }
    }, 100);
  }

  saveChanges(): void {
    if (!this.editMovieForm) return;

    const form = this.editMovieForm;

    if (form.invalid) {
      return;
    }

    let submitData: { movieName: string; image: string; movieGenre: string; movieProducer: string; summary: string; content: string } =
      form.value;

    this.apiService.updateMovie(this.movie._id, submitData).subscribe({
      next: (response) => {
        this.userService.showMessage('Changes saved successfully!');
        this.router.navigate([`movies/my-movies/`]);
        this.toggleEditing();
      },
      error: (error) => {
        this.userService.showMessage(error.error.message);
      },
    });
  }
}
