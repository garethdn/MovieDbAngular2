import {Component, Input} from 'angular2/core';
import {RouterLink} from 'angular2/router';
import {BaseComponent} from '../../common/base.component';
import {ImgHolderDirective} from '../../common/img_holder/img_holder.directive';

@Component({
  selector: 'movie-list-item',
  template: `
    <div class="movie-list-item col-xs-6 col-sm-4 col-md-3">
      <a [routerLink]="['Movie', { id: movie.id }]">
        <img *ngIf="movie.poster_path" src="{{API_SETTINGS.baseImageUrl}}w300/{{movie.poster_path}}">
        <img *ngIf="!movie.poster_path" mdb-holder="holder.js/100px100p?theme=sky" [text]="movie.title">
      </a>
    </div>
  `,
  directives: [ImgHolderDirective, RouterLink]
})

export class MoviesListItemComponent extends BaseComponent {

  @Input() movie: Object;

  constructor() {
    super();
  }

}