import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet, RouterLink} from 'angular2/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {MovieComponent} from '../../components/movies/movie.component';
import {MoviesComponent} from '../../components/movies/list/movies.component';
import {ErrorService} from '../common/error.service';
import * as AppConstants from '../app/app.constants';

@Component({
	selector: 'app',
  templateUrl: 'dist/components/app/app.component.html',
  directives: [RouterOutlet, RouterLink]
})

@RouteConfig([
  { path: '/', component: DashboardComponent, as: 'Dash' },
  { path: 'movie/:id', component: MovieComponent, as: 'Movie' },
  { path: 'movies', component: MoviesComponent, as: 'MoviesDefault', data: { movieType: 'byType' } },
  { path: 'movies/:type', component: MoviesComponent, as: 'MoviesByType', data: { movieType: 'byType' } },
  { path: 'movies/genre/:genreId', component: MoviesComponent, as: 'MoviesByGenre', data: { movieType: 'byGenre' } }
])

export class AppComponent{
  MOVIE_GENRES: any[] = AppConstants.MOVIE_GENRES;

  constructor(private _errorService:ErrorService) {
    this.subscribeToErrorService();
  }

  subscribeToErrorService() {
    this._errorService.error.subscribe(err => {
      console.error('Local error notifications');
    })
  }
}