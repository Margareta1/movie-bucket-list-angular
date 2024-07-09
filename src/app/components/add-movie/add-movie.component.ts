import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MovieStorageService } from '../../services/movie-storage.service';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  movieForm: FormGroup;
  movies: Movie[] = [];
  currentYear: number = new Date().getFullYear();

  constructor(
    private fb: FormBuilder,
    private movieStorageService: MovieStorageService
  ) {
    this.movieForm = this.fb.group({
      title: ['', Validators.required],
      year: [
        '',
        [
          Validators.required,
          Validators.min(1900),
          Validators.max(this.currentYear),
        ],
      ],
    });
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movies = this.movieStorageService.loadMovies();
  }

  saveMovies(): void {
    this.movieStorageService.saveMovies(this.movies);
    this.loadMovies();
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
    this.saveMovies();
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      const newMovie: Movie = this.movieForm.value;
      this.addMovie(newMovie);
      this.movieForm.reset();
    }
  }
}
