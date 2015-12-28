import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {MoviesService} from './movies.service';

@Component({
  selector: 'movies-list'
})

export class MoviesComponent implements OnInit {

  movies: any[];
  loading: Boolean;
  subscriptions: any[];

  constructor(private _routeParams:RouteParams,
    private _moviesService:MoviesService){}

  ngOnInit() {
    this.loading = true;

    var moviesSubscription = this._moviesService.getMovie(this._routeParams.get('id'))
      .subscribe(res => {
        console.log(res, arguments);
      })

    this.subscriptions.push(moviesSubscription);
  }

}