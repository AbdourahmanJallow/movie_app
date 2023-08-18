import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movies.model';
import { TrendingMovies } from 'src/app/models/movies.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
})
export class MovieCardComponent {
  @Input() movie: Movie | undefined;
  @Input() numOfCols: number | undefined;

  baseImagePath: string = 'https://image.tmdb.org/t/p/w500';
  imageUrl: string = '';

  // ngOnchanges(): void {
  //   if (this.movie && this.movie.poster_path) {
  //     this.imageUrl = this.baseImagePath + `/w500/${this.movie.poster_path}`;
  //   } else {
  //     this.imageUrl = '';
  //   }
  // }
}
