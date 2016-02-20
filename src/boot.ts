// Required for https://github.com/angular/angular/issues/7052
///<reference path="../node_modules/angular2/typings/browser.d.ts"/> 

import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS, XHRBackend, Http, RequestOptions} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent} from './components/app/app.component';
import {AuthenticationService} from './components/authentication/authentication.service';
import {MoviesService} from './components/movies/movies.service';
import {ErrorService} from './components/common/error.service';
import {CustomHttp} from './components/common/mdb_connection';

import 'rxjs/add/operator/map';

bootstrap(AppComponent, [
	HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  AuthenticationService,
  MoviesService,
  ErrorService,
  provide(Http, {
    useFactory: (xhrBackend: XHRBackend, requestOptions: RequestOptions, es:ErrorService) => {
      let originalHttp = new Http(xhrBackend, requestOptions);
      return new CustomHttp(originalHttp, es);
    },
    deps: [XHRBackend, RequestOptions, ErrorService]
  })]);