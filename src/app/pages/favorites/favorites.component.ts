import { Component } from '@angular/core';
import { OnInit, OnDestroy } from '@angular/core';
import { FavoriteMovies, Movie } from 'src/app/models/movies.model';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent implements OnInit {
  public savedMovies: Array<Movie> = [];

  constructor(private favoritesService: FavoritesService) {}
  ngOnInit(): void {
    this.favoritesService.movies.subscribe(
      (data) => (this.savedMovies = data.savedMovies)
    );
  }
  
}
