import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie.interface';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  movies: Array<Movie>;

  constructor(private readonly movieService: MovieService) { }

  ngOnInit() {
    const responseMovie = this.movieService.getTopMovies().pipe(map(({ movies }: any) => movies));
    responseMovie.subscribe((response) => {
      this.movies = response;
    });
  }

}
