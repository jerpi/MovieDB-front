import {Cast} from './Cast';

export class Movie {
  _id: string;
  id: number;
  cast: Array<Cast>;
  backdrop_path: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  original_title: string;
  release_date: string;
  title: string;
  overview: string;
  revenue: number;
  budget: number;
  genres: {
    id: number,
    name: string
  }[];
  production_companies: {
    id: number,
    name: string
  }[];
  runtime: number;
  spoken_languages: {
    iso_639_1: string;
    name: string;
  }[];
  tagline: string;
  status: string;
}
