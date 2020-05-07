import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/movie.interface';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  eventEmitterBD: EventEmitter<Array<Movie>> = new EventEmitter();
  eventEmitterDetail: EventEmitter<Movie> = new EventEmitter();
  movies: Array<Movie>;

  constructor(private readonly http: HttpClient) {
    this.movies = [];
  }

  emitChangeEvent(movie: Movie) {
    this.movies.push(movie);
    this.eventEmitterBD.emit(this.movies);
  }

  emitClick(movie: Movie) {
    this.movies.forEach(item => {
      if (item === movie) {
        item.trash = true;
      } else {
        item.trash = false;
      }
    });
    this.eventEmitterBD.emit(this.movies);
    this.eventEmitterDetail.emit(movie);
  }

  getMovies() {
    return this.eventEmitterBD;
  }

  getMovieDetail() {
    return this.eventEmitterDetail;
  }

  getTopMovies() {
    return this.http.get(environment.urlTop);
  }

  deleteMovie(movie: Movie) {
    this.movies = this.movies.filter(item => item !== movie);
    this.eventEmitterBD.emit(this.movies);
    this.eventEmitterDetail.emit(undefined);
  }
}
