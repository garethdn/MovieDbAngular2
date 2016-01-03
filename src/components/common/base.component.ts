import {Component, OnInit, OnDestroy} from 'angular2/core';
import * as AppConstants from '../app/app.constants';

declare var _: any;

export abstract class BaseComponent implements OnDestroy {

  private _subscriptions: any[] = [];
  public API_SETTINGS = AppConstants.API_SETTINGS;
  public loading: Boolean;

  ngOnDestroy() {
    this.unsubsribeAll();
  }

  addSubscription(sub) {
    this._subscriptions.push(sub);
  }

  unsubsribeAll() {
    _.each(this._subscriptions, sub => sub.unsubscribe());
  }

}
