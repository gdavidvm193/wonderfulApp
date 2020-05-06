import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit, OnDestroy {
  movies: Array<Movie>;
  subscription;
  constructor(private readonly movieService: MovieService) {
  }

  ngOnInit() {
    const moviesData = this.movieService.movies;
    this.movies = moviesData === [] ? [] : moviesData;
    this.subscription = this.movieService.getMovies().subscribe(item => {
      this.newItem(item);
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newItem(movie: Array<Movie>) {
    this.movies = movie;
  }
}
