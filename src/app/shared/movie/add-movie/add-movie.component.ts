import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MovieService } from '../../services/movie.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movie: Movie;
  createForm: FormGroup;
  constructor(
    private readonly movieService: MovieService,
    private readonly router: Router,
    private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {
    this.movie = {
      title: '',
      description: '',
      image: '',
      release: undefined
    };
  }

  saveMovie(movie: Movie) {
    this.movie = {
      title: movie.title,
      description: movie.description,
      release: movie.release,
      image: this.movie.image
    };
    this.movieService.emitChangeEvent(this.movie);
    this.router.navigate(['/home']);
  }

  initForm() {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      release: ['', Validators.required],
      image: ['', Validators.required],
      description: ['']
    });
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.movie.image = myReader.result;
    };
    myReader.readAsDataURL(file);
  }
}
