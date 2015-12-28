import {Component, OnInit} from 'angular2/core';
import {MoviesService} from '../movies/movies.service';
import {ShowcaseItemComponent} from  '../movies/showcase_item.component';
import {LoadingComponent} from '../common/loading/loading.component';

@Component({
  selector: 'dashboard',
  templateUrl: 'dist/components/dashboard/dashboard.component.html',
  directives: [ShowcaseItemComponent, LoadingComponent]
})
export class DashboardComponent implements OnInit {

  popularMovies: any[] = [];
  highestRatedMovies: any[] = [];
  loading: Boolean = false;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    console.log('in dashboard');

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
