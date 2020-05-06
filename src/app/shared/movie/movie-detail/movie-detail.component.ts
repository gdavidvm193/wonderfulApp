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
    this.subscription = this.movieService.getMovieDetail().subscribe(item => {
      this.newIteration(item);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newIteration(movie: Movie) {
    this.movie = movie;
    console.dir(movie);
  }

}
