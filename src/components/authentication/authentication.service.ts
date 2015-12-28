import {Injectable} from 'angular2/core';
import {Http, RequestOptionsArgs, Headers, URLSearchParams} from 'angular2/http';
import * as AppConstants from '../app/app.constants';
import * as PrivateConstants from '../../private';

@Injectable()
export class AuthenticationService {

  user: any;
  headers: Headers = new Headers();

  constructor(private _http:Http) {
    this.headers.append('Content-Type', 'application/json');
  }

  createNewToken() {
    return this._http.get(AppConstants.API_SETTINGS.url + '/authentication/token/new', {
      search: 'api_key=' + PrivateConstants.MDB_API_KEY
    });
  }

  validateWithCredentials(response) {
    return this._http.get(AppConstants.API_SETTINGS.url + '/authentication/token/validate_with_login', {
      body: JSON.stringify({
        'request_token': response.data.request_token,
        // 'username': credentials.username,
        // 'password': credentials.password
      }),
      search: 'api_key=' + PrivateConstants.MDB_API_KEY,
      headers: this.headers
    });
  }

  getUser() {
    return this._http.get(AppConstants.API_SETTINGS.url + '/account', {
      search: 'api_key=' + PrivateConstants.MDB_API_KEY,
      headers: this.headers
    });
  }
}