import {Component, OnInit} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';
import {MoviesService} from '../movies/movies.service';
import {ShowcaseItemComponent} from  '../movies/showcase_item.component';
import {LoadingDirective} from '../common/loading/loading.directive';

@Component({
  selector: 'dashboard',
  templateUrl: 'dist/components/dashboard/dashboard.component.html',
  directives: [ShowcaseItemComponent, NgFor, LoadingDirective]
})
export class DashboardComponent implements OnInit {

  popularMovies: any[] = [];
  highestRatedMovies: any[] = [];
  loading: Boolean = false;

  constructor(
    public routeParams:RouteParams, 
    public router:Router,
    private _moviesService: MoviesService) { }

  ngOnInit() {
    this.loading = true;

    this._moviesService.getMovies('popular').subscribe(res => {
      this.loading = false;
      this.popularMovies = res.json().results;
    });

    this._moviesService.getMovies('top_rated').subscribe(res => {
      this.highestRatedMovies = res.json().results;
    });
  }

}
