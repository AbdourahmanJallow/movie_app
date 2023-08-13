import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movies.model';
import { MovieDetails } from 'src/app/models/movieDetails.model';
import { MoviesService } from 'src/app/services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  public movieId: number | undefined;
  public movieDetails: MovieDetails | undefined;
  public movieSubscription: Subscription | undefined;
  public movieIdSubscription: Subscription | undefined;
  public isLoading: boolean | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MoviesService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.movieIdSubscription = this.activatedRoute.params.subscribe(
      (params) => (this.movieId = params['id'])
    );

    this.movieSubscription = this.movieService
      .getMovieDetails(this.movieId)
      .subscribe((data) => {
        this.movieDetails = data;
        console.log(data);
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    if (this.movieSubscription && this.movieIdSubscription) {
      this.movieSubscription.unsubscribe();
      this.movieIdSubscription.unsubscribe();
    }
  }
}
