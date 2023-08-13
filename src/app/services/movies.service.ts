import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  TrendingMovies,
  Genres,
  Movie,
  NowPlayingOrUpcoming,
} from '../models/movies.model';
import { MovieDetails } from 'src/app/models/movieDetails.model';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'ab36cac2d26370cf7d5fb65859f53a25';
const authorizationHeader = `Bearer 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`;

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

// const options = {
//   method: 'GET',
//   headers: {
//     Accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjM2Y2FjMmQyNjM3MGNmN2Q1ZmI2NTg1OWY1M2EyNSIsInN1YiI6IjY0ZDI2MmVhNmQ0Yzk3MDBjYjdmNjlhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HCZLB6wv3KSIMSYvWwe1837AYjLX0kW5XmDAT99FWRc',
//   },
// };

// fetch(
//   'https://api.themoviedb.org/3/movie/top_rated?api_key=ab36cac2d26370cf7d5fb65859f53a25',
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
