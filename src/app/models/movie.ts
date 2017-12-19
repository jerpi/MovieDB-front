import {Cast} from './cast';

export class Movie {
  _id: string;
  id: number;
  cast: Cast[];
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
  bande_annonce: string;
  videos: {
    id: string,
    key: string,
    name: string,
    site: string,
    size: string,
    type: string,
    iso_639_1: string,
    iso_3166_1: string
  }[];
}
