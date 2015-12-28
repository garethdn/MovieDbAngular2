import {Component, Injector} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Router, RouteConfig, RouterOutlet, Route, CanActivate} from 'angular2/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {AuthenticationService} from '../authentication/authentication.service';
import * as AppConstants from '../app/app.constants';

@Component({
  selector: 'app',
  templateUrl: 'dist/components/shell/shell.component.html',
  directives: [RouterOutlet]
})

@CanActivate((next, prev) => {
  var injector = Injector.resolveAndCreate([
    HTTP_PROVIDERS,
    AuthenticationService
  ])

  var authService = injector.get(AuthenticationService);

  return new Promise<boolean>((resolve, reject) => {
    authService.createNewToken().subscribe(res => {
      resolve(true);
    });
  });

})

@RouteConfig([
  new Route({ path: '/', component: DashboardComponent, name: 'Dashboard' })
])

export class ShellComponent { 
  MOVIE_GENRES: any[] = AppConstants.MOVIE_GENRES;
}