import {Component} from 'angular2/core';
import {Router, RouteConfig, RouterOutlet, Route} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ShellComponent} from '../shell/shell.component';

@Component({
	selector: 'app',
  template: '<router-outlet></router-outlet>',
	directives: [RouterOutlet]
})

@RouteConfig([
	new Route({ path: '...', component: ShellComponent, name: 'Shell' })
])

export class AppComponent {}