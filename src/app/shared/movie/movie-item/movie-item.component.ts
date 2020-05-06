import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {
  @Input() movie: Movie;
  @Input() list: string;
  constructor(private readonly movieService: MovieService) {
  }

  goDetail(movie: Movie) {
    this.movieService.emitClick(movie);
  }
}
