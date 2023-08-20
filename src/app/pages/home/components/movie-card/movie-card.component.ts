import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/models/movies.model';
import { TrendingMovies } from 'src/app/models/movies.model';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent implements OnInit, OnDestroy {
  constructor(private favoritesService: FavoritesService) {}
  favorites: Array<Movie> | undefined;

  ngOnInit(): void {
    this.favoritesService.movies.subscribe(
      (data) => (this.favorites = data.savedMovies)
    );
  }
  ngOnDestroy(): void {}

  @Input() movie: Movie | undefined;
  @Input() numOfCols: number | undefined;

  baseImagePath: string = 'https://image.tmdb.org/t/p/w500';
  imageUrl: string = '';

  saveMovie(movie: Movie): void {
    this.favoritesService.saveMovie(movie);
  }

  removeMovie(movie: Movie): void {
    this.favoritesService.removeMovie(movie);
  }

  isMovieSaved(movie: Movie): boolean {
    const found = this.favorites?.find((_movie) => _movie.id === movie.id);

    if (found) {
      return true;
    }
    return false;
  }

  isSaved = true;

  // ngOnchanges(): void {
  //   if (this.movie && this.movie.poster_path) {
  //     this.imageUrl = this.baseImagePath + `/w500/${this.movie.poster_path}`;
  //   } else {
  //     this.imageUrl = '';
  //   }
  // }
}
