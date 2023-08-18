export interface Videos {
  id: number;
  results: Array<VideoDetails>;
}

export interface VideoDetails {
  id: string;
  iso_3166_1: '';
  iso_639_1: '';
  key: string;
  name: string;
  official: boolean;
  published_at: Date;
  site: '';
  size: number;
  type: '';
}

export enum ISO3166_1 {
  Us = 'US',
}

export enum ISO639_1 {
  En = 'en',
}

export enum Site {
  YouTube = 'YouTube',
}

export enum Type {
  BehindTheScenes = 'Behind the Scenes',
  Clip = 'Clip',
  Featurette = 'Featurette',
  Teaser = 'Teaser',
  Trailer = 'Trailer',
}
