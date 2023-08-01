import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-new-movie",
  templateUrl: "./new-movie.component.html",
  styleUrls: ["./new-movie.component.css"],
})
export class NewMovieComponent {
  newMovieSubmitHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    console.log(form.value);
  }
}
