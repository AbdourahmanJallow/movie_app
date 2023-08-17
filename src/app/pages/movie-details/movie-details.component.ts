import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {
  MovieDetails,
  ProductionCompany,
} from 'src/app/models/movieDetails.model';
import { Movie } from 'src/app/models/movies.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';
import { RatingConfig } from 'ngx-bootstrap/rating';
import { Location } from '@angular/common';

// such override allows to keep some initial values
export function getRatingConfig(): RatingConfig {
  return Object.assign(new RatingConfig(), { ariaLabel: 'My Rating' });
}

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  max = 5;
  rate = 3;
  isReadonly = true;

  public movieId: number | undefined;
  public movieDetails: MovieDetails | undefined;
  public similarMovies: Array<Movie> | undefined;

  public movieSubscription: Subscription | undefined;
  public movieIdSubscription: Subscription | undefined;
  public similarMoviesSubscription: Subscription | undefined;

  public isLoading: boolean | undefined;
  public productionCompanies: Array<ProductionCompany> | undefined;

  public baseImagePath: string = 'https://image.tmdb.org/t/p/w500';
  public noLogo = 'https://placehold.co/150?text=No+Logo';

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService,
    private changeDetector: ChangeDetectorRef,
    private router: Router,
    private location: Location
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    // window.scrollTo(0, 0);
    this.isLoading = true;
    this.movieIdSubscription = this.activatedRoute.params.subscribe(
      (params) => {
        this.movieId = params['id'];

        this.movieService.getMovieDetails(this.movieId).subscribe((data) => {
          this.movieDetails = data;
          this.productionCompanies = data?.production_companies;
          console.log(data);

          this.movieService
            .getSimilarMovies(this.movieId)
            .subscribe((response) => {
              console.log(response.results);
              this.similarMovies = response?.results.slice(0, 12);
            });

          this.isLoading = false;
        });
      }
    );

    this.similarMoviesSubscription = this.movieService
      .getSimilarMovies(this.movieId)
      .subscribe((response) => {
        console.log(response.results);
        this.similarMovies = response?.results.slice(0, 12);
      });
  }

  ngOnDestroy(): void {
    if (this.movieSubscription) {
      this.movieSubscription.unsubscribe();
    }
    if (this.movieIdSubscription) {
      this.movieIdSubscription.unsubscribe();
    }
    if (this.similarMoviesSubscription) {
      this.similarMoviesSubscription.unsubscribe();
    }
  }

  numberWithCommas(x: string): string {
    var parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  toPreviousPage(): void {
    // this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    this.location.back();
  }

  // getMoviesInfo(movie_id: number | undefined): void {
  //   this.movieService.getMovieDetails(movie_id).subscribe((data) => {
  //     this.movieDetails = data;
  //     this.productionCompanies = data?.production_companies;
  //     console.log(data);

  //     this.movieService.getSimilarMovies(movie_id).subscribe((response) => {
  //       console.log(response.results);
  //       this.similarMovies = response?.results.slice(0, 12);
  //     });
  //   });
  // }

  public avatarUrl =
    'https://www.telerik.com/kendo-react-ui-develop/components/images/user-avatar.jpeg';
  public description = 'Having so much fun in Prague! #NaZdravi';
}
