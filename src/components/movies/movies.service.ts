import {Injectable} from 'angular2/core';
import {Http, URLSearchParams} from 'angular2/http';
import * as AppConstants from '../app/app.constants';
import * as PrivateConstants from '../../private';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

declare var _: any;

@Injectable()
export class MoviesService {

  constructor(private _http:Http) {}

  getMovie(id) {
    var urlParams = new URLSearchParams();

    urlParams.append('api_key', PrivateConstants.MDB_API_KEY);
    urlParams.append('append_to_response', 'credits,trailers,similar,account_states,lists,releases');
    urlParams.append('_', new Date().getTime().toString());

    var url = AppConstants.API_SETTINGS.url + '/movie/' + id;

    return this._http.get(url, {
      search: urlParams
    }).map(res => {
      return onMovieSuccess(res.json());
    }, res => {
      return onMovieError(res.json());
    });

    function onMovieSuccess(data) {
      data.directors = _.where(data.credits.crew, { job: 'Director' });
      data.writers = _.where(data.credits.crew, { department: 'Writing' });

      return data;
    }

    function onMovieError(error) {
      return error;
    }
  }

  getMovies(type, page:number = 1) {
    var url = AppConstants.API_SETTINGS.url + '/movie/' + (type || 'popular');

    var params = { page: page };

    return this.getMovieCollection(url, params);
  }

  getMovieGenres(genreId, page: number = 1) {
    var url = AppConstants.API_SETTINGS.url + '/genre/' + genreId + '/movies';

    var params = { page: page };

    return this.getMovieCollection(url, params);
  }

  private getMovieCollection(url, params) {
    var urlParams = new URLSearchParams();

    urlParams.append('api_key', PrivateConstants.MDB_API_KEY);

    return this._http.get(url, {
      search: urlParams
    }).map(res => res.json());
  }

  // We can use these callbacks for all movie collections
  private _onMovieCollectionSuccess(data, status, headers, config) {
    return data;
  }

  private _onMovieCollectionError(error) {
    return error;
  }

}