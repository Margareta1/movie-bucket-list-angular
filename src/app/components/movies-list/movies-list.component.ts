import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';

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

  loadMovies(): void {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      this.movies = JSON.parse(storedMovies);
    }
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  deleteMovie(movie: Movie): void {
    this.movies = this.movies.filter((m) => m !== movie);
    localStorage.setItem('movies', JSON.stringify(this.movies));
  }
}
