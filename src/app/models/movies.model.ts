// interface for popular, top_rated and trending movies
export interface TrendingMovies {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}

// interface for now_playing and upcoming movies
export interface NowPlayingOrUpcoming {
  dates: Dates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// interface for movie object
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: MediaType;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genres {
  genres: Array<GenreItem>;
}

export interface GenreItem {
  id: number;
  name: string;
}

export interface Dates {
  maximum: Date;
  minimum: Date;
}

export enum MediaType {
  Movie = 'movie',
}

export enum OriginalLanguage {
  En = 'en',
  Fr = 'fr',
  Ja = 'ja',
  Uk = 'uk',
}
