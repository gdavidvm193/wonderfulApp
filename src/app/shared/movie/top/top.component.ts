import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  movies;

  constructor(private readonly movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getTopMovies().subscribe(response => {
      console.dir(response);
      this.movies = response.movies;
    });
  }

}
