import { environment } from '../../environments/environment';

export const SERVER = environment.serverUrl;

export const SERVER_IMAGE_500 = 'http://image.tmdb.org/t/p/w500';

export const SERVER_IMAGE_200 = 'http://image.tmdb.org/t/p/w200';

export const SERVICE_CONFIG = {

  POPULAR: SERVER + '/movie/popular',

  DISCOVER: SERVER + '/movie/discover',

  SEARCH: SERVER + '/movie/search',

  REVIEW: SERVER + '/movie/review',

  NOW_PLAYING: SERVER + '/movie/now-playing',

  TOP_RATED: SERVER + '/movie/top-rated',

  MOVIE_DETAIL: SERVER + '/movie/movie-detail',

  CREDIT: SERVER + '/movie/credits',


  LOGIN: SERVER + '/auth/login',

  // config url logout
  LOGOUT: SERVER + '/auth/logout',


};

export enum SocketEvent {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  DATA_DASHBOARD = 'data'
}
