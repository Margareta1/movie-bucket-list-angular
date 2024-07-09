import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieStorageService {
  private storageKey = 'movies';

  constructor() {}

  loadMovies(): Movie[] {
    const storedMovies = localStorage.getItem(this.storageKey);
    return storedMovies ? JSON.parse(storedMovies) : [];
  }

  saveMovies(movies: Movie[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(movies));
  }

  deleteMovie(movie: Movie): void {
    const movies = this.loadMovies().filter(
      (m) => m.title !== movie.title || m.year !== movie.year
    );
    this.saveMovies(movies);
  }
}
