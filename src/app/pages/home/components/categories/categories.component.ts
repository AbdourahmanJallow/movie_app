import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { GenreItem, Genres } from 'src/app/models/movies.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
})
export class CategoriesComponent implements OnInit, OnDestroy {
  constructor(private moviesService: MoviesService) {}

  public genres: Array<GenreItem> | undefined;
  // categories: Array<string> | undefined;
  public categoriesSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.categoriesSubscription = this.moviesService
      .getAllGenres()
      .subscribe((response) => {
        console.log(response);
        this.genres = response.genres;
      });
  }

  ngOnDestroy(): void {
    this.categoriesSubscription?.unsubscribe();
  }
}
