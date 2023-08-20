import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Movie, FavoriteMovies } from '../models/movies.model';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  movies = new BehaviorSubject<FavoriteMovies>({ savedMovies: [] });

  constructor(private snackBar: MatSnackBar) {
    this.loadFromLocalStorage();
  }

  saveMovie(movie: Movie): void {
    const savedMovies = [...this.movies.value.savedMovies];
    const foundMovie = savedMovies.find((_movie) => _movie.id === movie.id);

    if (foundMovie) {
      this.snackBar.open(`${movie?.title} already saved`, 'ok', {
        duration: 3000,
      });
    } else {
      savedMovies.push(movie);
    }

    this.movies.next({ savedMovies });
    this.snackBar.open(`${movie?.title} is added to favorites`, 'ok', {
      duration: 3000,
    });
    console.log('favorites', savedMovies);

    this.saveToLocalStorage();
  }

  removeMovie(movie: Movie, update = true): Array<Movie> {
    const filteredMovies = this.movies.value.savedMovies.filter(
      (_movie) => _movie.id !== movie.id
    );

    if (update) {
      this.movies.next({ savedMovies: filteredMovies });
      this.snackBar.open(`${movie?.title} is removed from favorites`, 'ok', {
        duration: 3000,
      });
      console.log('favorites', filteredMovies);
    }
    this.saveToLocalStorage();

    return filteredMovies;
  }

  saveToLocalStorage(): void {
    localStorage.setItem(
      'favoriteMovies',
      JSON.stringify(this.movies.value.savedMovies)
    );
  }

  loadFromLocalStorage(): void {
    const savedMoviesString = localStorage.getItem('favoriteMovies');
    if (savedMoviesString) {
      const savedMovies = JSON.parse(savedMoviesString);
      this.movies.next({ savedMovies });
    }
  }
}
