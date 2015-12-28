import {Component, Input, ChangeDetectionStrategy} from 'angular2/core';
import * as AppConstants from '../app/app.constants';

@Component({
  selector: 'mdb-showcase-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a href="movie/{{item.id}}" class="showcase-item" [ngClass]="classes">
      <div class="background" [ngStyle]="getBackgroundImage()"></div>
      <div class="contents">  
        <h3 class="item-title">{{item.title}}</h3>
        <div class="item-detail">
          <p class="small">
            {{item.overview | slice:0:159}}
            {{item.overview.length > 160 ? '...' : ''}}
          </p>
        </div>
      </div>
    </a>
  `
})

export class ShowcaseItemComponent {

  @Input() item: any;
  @Input() classes: string;

  constructor() {}

  getBackgroundImage() {
    return this.item.backdrop_path ?
      { 'background-image': 'url(' + AppConstants.API_SETTINGS.baseImageUrl + 'w500' + this.item.backdrop_path + ')' } :
      {}
  }

}