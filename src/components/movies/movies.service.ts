import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import * as AppConstants from '../app/app.constants';
import * as PrivateConstants from '../../private';

@Injectable()
export class MoviesService {

  constructor(private _http:Http) {}

  getMovies(type:string = 'popular', page:number = 1) {
    var url = AppConstants.API_SETTINGS.url + '/movie/' + type;

    var params = { page: page };

    return this.getMovieCollection(url, params);
  }

  private getMovieCollection(url, params) {
    var urlParams = new URLSearchParams();

    urlParams.append('api_key', PrivateConstants.MDB_API_KEY);

    return this._http.get(url, {
      search: urlParams
    });
  }

  // We can use these callbacks for all movie collections
  private _onMovieCollectionSuccess(data, status, headers, config) {
    return data;
  }

  private _onMovieCollectionError(error) {
    return error;
  }

}