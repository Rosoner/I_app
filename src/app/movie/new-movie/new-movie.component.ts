import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css'],
})
export class NewMovieComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  newMovieSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { themeName, postText } = form.value;
    this.apiService.createMovie(themeName, postText).subscribe(() => {
      this.router.navigate(['/movies']);
    });
  }
}
