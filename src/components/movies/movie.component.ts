import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {MoviesService} from './movies.service';
import {LoadingComponent} from '../common/loading/loading.component';
import {BackdropComponent} from '../common/backdrop/backdrop.component';
import * as AppConstants from '../app/app.constants';

@Component({
  selector: 'movie',
  templateUrl: 'dist/components/movies/movie.component.html',
  directives: [LoadingComponent, BackdropComponent]
})

export class MovieComponent implements OnInit {

  movie: Object = {};
  API_SETTINGS = AppConstants.API_SETTINGS;
  loading: Boolean;
  subscriptions: any[];

  constructor(private _routeParams: RouteParams,
    private _moviesService: MoviesService) { }

  ngOnInit() {
    console.log('in movie component', this._routeParams.params);

    this.loading = true;

    var movieSubscription = this._moviesService.getMovie(this._routeParams.get('id'))
      .subscribe(res => {
        this.loading = false;
        this.movie = res;
      })
  }

}