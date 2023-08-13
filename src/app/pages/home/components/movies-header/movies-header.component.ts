import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-header',
  templateUrl: './movies-header.component.html',
  styleUrls: ['./movies-header.component.css'],
})
export class MoviesHeaderComponent implements OnInit {
  public movieType: string = 'popular';
  public count: number = 12;
  public numOfCols: number = 6;

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

  ngOnInit(): void {}

  constructor(private moviesService: MoviesService) {}

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
}
