import {Injectable} from 'angular2/core';
import {Response} from 'angular2/http';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ErrorService {

  public error: Subject<Response>;

  constructor() {
    this.error = new Subject();
    this.error.subscribe(res => this.onRequestError(res))
  }

  onRequestError(res:Response) {
    console.error('Global notifier - show error message');
  }

}