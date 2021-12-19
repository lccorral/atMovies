export interface Movie {
  id: number;
  title: string;
  poster: string;
  genre: string;
  year: number;
  duration: number;
  imdbRating: number;
  actors: number[] | null;
}

export interface Actor {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  bornCity: string;
  birthdate: string;
  img: string;
  rating: number;
  movies: number[] | null;
}

export interface Company {
  id: number;
  name: string;
  country: string;
  createYear: number;
  employees: number;
  rating: number;
  movies: number[] | null;
}
