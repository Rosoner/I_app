import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnChanges {
  @Input() data: Movie = {
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

  // lifecycle when data is changed
  ngOnChanges(changes: SimpleChanges): void {}
}
