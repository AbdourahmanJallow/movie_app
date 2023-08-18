import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from 'src/app/models/movies.model';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit, OnDestroy {
  constructor(
    private movieService: MoviesService,
    private router: ActivatedRoute,
    private location: Location
  ) {}

  public movieResults: Array<Movie> | undefined;
  public isLoading: boolean | undefined;
  public baseImagePath: string = 'https://image.tmdb.org/t/p/w500';
  public searchValue: string = '';

  ngOnInit() {
    this.isLoading = true;
    this.router.queryParams.subscribe(
      (params) => (this.searchValue = params['q'])
    );
    this.movieService.searchMovieByName(this.searchValue).subscribe((data) => {
      this.movieResults = data?.results;
      console.log(data.results);
      this.isLoading = false;
    });
  }
  ngOnDestroy() {}

  toPreviousPage(): void {
    this.location.back();
    console.log('Path: ' + this.location.path());
  }
}
