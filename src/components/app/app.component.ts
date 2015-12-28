import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {MovieComponent} from '../../components/movies/movie.component';
import {MoviesComponent} from '../../components/movies/movies.component';
import * as AppConstants from '../app/app.constants';

@Component({
	selector: 'app',
  templateUrl: 'dist/components/app/app.component.html',
  directives: [RouterOutlet, RouterLink]
})

@RouteConfig([
  { path: '/', component: DashboardComponent, as: 'Dash' },
  { path: 'movie/:id', component: MovieComponent, as: 'Movie' },
  { path: 'movies/:type', component: MoviesComponent, as: 'Movies' }
])

export class AppComponent{
  MOVIE_GENRES: any[] = AppConstants.MOVIE_GENRES;

  constructor() {}
}