import {Component, OnInit} from 'angular2/core';
import {RouteParams, RouterLink} from 'angular2/router';
import {MoviesService} from './movies.service';
import {LoadingComponent} from '../common/loading/loading.component';
import {BackdropComponent} from '../common/backdrop/backdrop.component';
import {PersonListItemComponent} from '../people/person_list_item.component';
import {ImgHolderDirective} from '../common/img_holder/img_holder.directive';
import {CustomDatePipe} from '../common/pipes/custom_date.pipe';
import {BaseComponent} from '../common/base.component';

@Component({
  selector: 'movie',
  templateUrl: 'dist/components/movies/movie.component.html',
  pipes: [CustomDatePipe],
  directives: [LoadingComponent, BackdropComponent, PersonListItemComponent, ImgHolderDirective, RouterLink]
})

export class MovieComponent extends BaseComponent implements OnInit {

  movie: Object = {};

  constructor(private _routeParams: RouteParams, 
    private _moviesService: MoviesService) { 
    super();
  }

  ngOnInit() {
    this.loading = true;

    var sub = this._moviesService.getMovie(this._routeParams.get('id'))
      .subscribe(res => {
        this.loading = false;
        this.movie = res;
      }, err => {
        console.warn('Oops...', err.status);
      })

    this.addSubscription(sub);
  }

}