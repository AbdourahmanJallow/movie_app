import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  TrendingMovies,
  Genres,
  NowPlayingOrUpcoming,
} from '../models/movies.model';
import { MovieDetails } from 'src/app/models/movieDetails.model';
import { environment } from 'src/environments/environment.development';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = '';

// const headers = new Headers({
//   Authorization: authorizationHeader,
// });

// const requestOptions = {
//   observe: 'response',
//   headers: headers,
//   responseType: 'json',
// };

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getTrendingMovies(): Observable<TrendingMovies> {
    return this.http.get<TrendingMovies>(
      apiUrl + `/trending/movie/week?api_key=${apiKey}`
    );
  }

  getUpcomingOrNowplayingMovies(
    type: string
  ): Observable<NowPlayingOrUpcoming> {
    const data = this.http.get<NowPlayingOrUpcoming>(
      apiUrl + `/movie/${type}?api_key=${apiKey}`
    );
    // console.log(data);
    console.log(environment);
    return data;
  }

  getAllGenres(): Observable<Genres> {
    return this.http.get<Genres>(
      `${apiUrl}/genre/movie/list?api_key=${apiKey}`
    );
  }

  getMovieDetails(movie_id: number | undefined): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(
      `${apiUrl}/movie/${movie_id}?api_key=${apiKey}`
    );
  }
}
