import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movies.model';
import { TrendingMovies } from 'src/app/models/movies.model';

const ROW_HEIGHTS: { [id: number]: number } = {
  1: 400,
  5: 335,
  6: 350,
};

const GUTTER_SIZE: { [id: number]: string } = {
  1: '20',
  4: '12',
  5: '10',
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  public filterBy: string = 'popular';
  public showCount = 12;
  public columns: number = 5;
  public rowHeight: number = ROW_HEIGHTS[this.columns];
  public gutterSize: string = GUTTER_SIZE[this.columns];
  public data: TrendingMovies | undefined;
  public movies: Array<Movie> | undefined;
  public moviesSubscription: Subscription | undefined;
  public isLoading: boolean | undefined;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.getAllMovies();
  }

  ngOnDestroy(): void {
    if (this.moviesSubscription) this.moviesSubscription.unsubscribe();
  }

  getAllMovies(): void {
    this.isLoading = true;
    this.moviesSubscription = this.moviesService
      .getUpcomingOrNowplayingMovies(this.filterBy)
      .subscribe((data) => {
        this.movies = data?.results;
        console.log(data);
        this.isLoading = false;
      });
  }

  onSortChange(_movieType: string): void {
    this.filterBy = _movieType;
    this.getAllMovies();
  }

  onItemsShowChange(newItem: number): void {
    this.showCount = newItem;
  }

  onUpdateColumns(cols: number): void {
    this.columns = cols;
  }

  onMovieSearch(search: string): void {}
}
