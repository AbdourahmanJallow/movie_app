import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-header',
  templateUrl: './movies-header.component.html',
  styleUrls: ['./movies-header.component.css'],
})
export class MoviesHeaderComponent implements OnInit {
  public movieType: string = 'popular';
  public count: number = 12;
  public numOfCols: number = 6;
  public search = '';

  public buttons: Array<{ name: string; value: string }> = [
    {
      name: 'Now Playing',
      value: 'now_playing',
    },
    {
      name: 'Popular',
      value: 'popular',
    },
    { name: 'Top Rated', value: 'top_rated' },
    { name: 'Upcoming', value: 'upcoming' },
  ];

  @Output() sortChange = new EventEmitter<string>();
  @Output() itemsShowCount = new EventEmitter<number>();
  @Output() updateColumns = new EventEmitter<number>();
  @Output() searchTerm = new EventEmitter<string>();

  ngOnInit(): void {}

  constructor(private moviesService: MoviesService, private router: Router) {}

  updateSort(_movieType: string): void {
    this.movieType = _movieType;
    this.sortChange.emit(_movieType);
    this.moviesService.getUpcomingOrNowplayingMovies(_movieType);
  }

  changeNumberOfItems(newItem: number): void {
    this.count = newItem;
    this.itemsShowCount.emit(newItem);
  }

  onColumnsUpdated(item: number): void {
    this.numOfCols = item;
    this.updateColumns.emit(item);
  }

  searchMovieByName(searchValue: string): void {
    console.log(searchValue);
    // this.searchTerm.emit(searchValue);
    this.search = '';
    this.router.navigate(['/search-movie'], {
      queryParams: { q: searchValue },
    });
  }
}
