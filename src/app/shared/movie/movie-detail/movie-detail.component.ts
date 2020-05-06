import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie: Movie;
  subscription;
  constructor(private readonly movieService: MovieService) {
  }
  ngOnInit() {
    this.movieService.movies.forEach((movie: Movie) => {
      if (movie.trash === true) {
        this.movie = movie;
      }
    });
    this.subscription = this.movieService.getMovieDetail().subscribe(item => {
      this.newIteration(item);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newIteration(movie: Movie) {
    this.movie = movie;
  }

}
