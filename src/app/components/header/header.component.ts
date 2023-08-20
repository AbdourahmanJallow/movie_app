import { Component, OnInit, OnDestroy } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Movie } from 'src/app/models/movies.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public savedMovies: Array<Movie> = [];

  constructor(private favoritesService: FavoritesService) {}
  ngOnInit(): void {
    this.favoritesService.movies.subscribe(
      (data) => (this.savedMovies = data.savedMovies)
    );
  }
  public value = 'Clear me';
}
