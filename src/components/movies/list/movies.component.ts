import {Component, OnInit, OnDestroy} from 'angular2/core';
import {RouteParams, RouteData} from 'angular2/router';
import {MoviesService} from '../movies.service';
import {MoviesListItemComponent} from '../list/movies_list_item.component';
import {LoadingComponent} from '../../common/loading/loading.component';
import {BaseComponent} from '../../common/base.component';
import {MOVIE_GENRES} from '../../app/app.constants';
import {MOVIE_TYPES_MAP} from '../../app/app.constants';

declare var _: any;

@Component({
  selector: 'movies-list',
  templateUrl: 'dist/components/movies/list/movies.component.html',
  directives: [MoviesListItemComponent, LoadingComponent],
  styles: [`
    .movies-container { position:relative; }
    .movies-heading { text-transform: capitalize; }
  `]
})

export class MoviesComponent extends BaseComponent implements OnInit {

  movies: Object[] = [];
  pageHeader: string;

  constructor(private _routeParams:RouteParams,
    private _routeData:RouteData,
    private _moviesService:MoviesService){
    super();

  }

  ngOnInit() {
    this.loading = true;
    this.pageHeader = this.getPageHeader();

    var sub = this.getMovies().subscribe(response => {
      this.loading = false;
      this.movies = response.results;
    });

    this.addSubscription(sub);
  }

  getMovies() {
    switch (this._routeData.get('movieType')) {
      case 'byType':
        return this._moviesService.getMovies(this._routeParams.get('type'))
        break;

      case 'byGenre':
        return this._moviesService.getMovieGenres(this._routeParams.get('genreId'))
        break;
    }
  }

  getPageHeader() {
    switch (this._routeData.get('movieType')) {
      case 'byType':
        return MOVIE_TYPES_MAP[this._routeParams.get('type') || 'popular']
        break;

      case 'byGenre':
        return _.findWhere(MOVIE_GENRES, { id: parseInt(this._routeParams.get('genreId'), 10) }).label;
        break;
    }
  }

}