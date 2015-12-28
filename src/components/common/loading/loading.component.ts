import {Component, Input} from 'angular2/core';

@Component({
  selector: '[mdb-loading]',
  template: `
    <ng-content></ng-content>
    <div class="loading fader fader-fast" *ngIf="loading"></div>
  `
})

export class LoadingComponent {

  @Input() loading: Boolean;

}