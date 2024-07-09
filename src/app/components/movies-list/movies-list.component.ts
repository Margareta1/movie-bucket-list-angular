import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';
import { MovieStorageService } from '../../services/movie-storage.service';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatButtonModule],
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  displayedColumns: string[] = ['title', 'year', 'delete'];

  constructor(private movieStorageService: MovieStorageService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movies = this.movieStorageService.loadMovies();
  }

  deleteMovie(movie: Movie): void {
    this.movieStorageService.deleteMovie(movie);
    this.loadMovies();
    console.log(movie, this.movies);
  }
}
