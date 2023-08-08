import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css'],
})
export class NewMovieComponent implements OnInit {
  @ViewChild('newMovieForm') newMovieForm: NgForm | undefined;

  submitHandler(): void {
    if (!this.newMovieForm) return;

    const form = this.newMovieForm;

    if (form.invalid) {
      return;
    }

    let submitData: { movieName: string; image: string; movieGenre: string; movieProducer: string; summary: string; content: string } =
      form.value;

    this.api.storeMovie(submitData).subscribe({
      next: (response) => {
        this.router.navigate([`/movies/${response._id}`]);
        this.userService.showMessage('Posted successfully!');
      },
      error: (error) => {
        this.userService.showMessage(error.error.message);
      },
    });
  }

  constructor(
    private api: ApiService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('accessToken')) {
      this.userService.isLoggedIn = false;
      this.router.navigate(['/']);
    }
  }
}
