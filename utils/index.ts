export interface MovieGenres {
  [key: number]: string;
}

export interface TvShowGenres {
  [key: number]: string;
}

export const getBackdrop = (url: string) => ({
  w300: `https://image.tmdb.org/t/p/w300${url}`,
  w780: `https://image.tmdb.org/t/p/w780${url}`,
  w1280: `https://image.tmdb.org/t/p/w1280${url}`,
  original: `https://image.tmdb.org/t/p/original${url}`,
});

export const getPoster = (url: string) => ({
  w92: `https://image.tmdb.org/t/p/w92${url}`,
  w154: `https://image.tmdb.org/t/p/w154${url}`,
  w185: `https://image.tmdb.org/t/p/w185${url}`,
  w342: `https://image.tmdb.org/t/p/w342${url}`,
  w500: `https://image.tmdb.org/t/p/w500${url}`,
  w780: `https://image.tmdb.org/t/p/w780${url}`,
  original: `https://image.tmdb.org/t/p/original${url}`,
});

export const getLogo = (url: string) => ({
  w45: `https://image.tmdb.org/t/p/w45${url}`,
  w92: `https://image.tmdb.org/t/p/w92${url}`,
  w154: `https://image.tmdb.org/t/p/w154${url}`,
  w185: `https://image.tmdb.org/t/p/w185${url}`,
  w300: `https://image.tmdb.org/t/p/w300${url}`,
  w500: `https://image.tmdb.org/t/p/w500${url}`,
  original: `https://image.tmdb.org/t/p/original${url}`,
});

export const movieGenres: MovieGenres = {
  0: "All",
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export const tvShowsGenres: TvShowGenres = {
  10759: "Action & Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  10762: "Kids",
  9648: "Mystery",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics",
  37: "Western",
};

export const getMovieGenre = (id: number) => movieGenres[id];
export const getTVShowsGenre = (id: number) => tvShowsGenres[id];
