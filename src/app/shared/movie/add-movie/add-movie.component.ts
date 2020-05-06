import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movie: Movie;
  constructor(
    private readonly movieService: MovieService,
    private readonly router: Router) { }

  ngOnInit() {
    this.movie = {
      title: '',
      description: '',
      image: '',
      release: new Date()
    };
  }

  saveMovie(movie: Movie) {
    this.movieService.emitChangeEvent(movie);
    this.router.navigate(['/home']);
  }
}
