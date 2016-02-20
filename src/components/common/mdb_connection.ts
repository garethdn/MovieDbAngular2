import {Injectable} from 'angular2/core';
import {Http, Request, RequestOptionsArgs, Response} from 'angular2/http';
import {ErrorService} from '../common/error.service';

import 'rxjs/add/operator/do';

@Injectable()
export class CustomHttp {
  constructor(private http: Http,
    private _errorService:ErrorService) {
  }

  public request(url: string | Request, options?: RequestOptionsArgs) {
    return this.http.request(url, options).do(
      res => this.onRequestSuccess(res),
      res => this.onRequestError(res),
      () => this.onRequestComplete()
    );
  }

  public get(url: string, options?: RequestOptionsArgs) {
    return this.http.get(url, options).do(
      res => this.onRequestSuccess(res),
      res => this.onRequestError(res),
      () => this.onRequestComplete()
    )
  }

  public post(url: string, body: string, options?: RequestOptionsArgs) {
    return this.http.post(url, body, options).do(
      res => this.onRequestSuccess(res),
      res => this.onRequestError(res),
      () => this.onRequestComplete()
    );
  }

  public put(url: string, body: string, options?: RequestOptionsArgs) {
    return this.http.put(url, body, options).do(
      res => this.onRequestSuccess(res),
      res => this.onRequestError(res),
      () => this.onRequestComplete()
    );
  }

  public delete(url: string, options?: RequestOptionsArgs) {
    return this.http.delete(url, options).do(
      res => this.onRequestSuccess(res),
      res => this.onRequestError(res),
      () => this.onRequestComplete()
    );
  }

  public patch(url: string, body: string, options?: RequestOptionsArgs) {
    return this.http.patch(url, body, options).do(
      res => this.onRequestSuccess(res),
      res => this.onRequestError(res),
      () => this.onRequestComplete()
    );
  }

  public head(url: string, options?: RequestOptionsArgs) {
    return this.http.head(url, options).do(
      res => this.onRequestSuccess(res),
      res => this.onRequestError(res),
      () => this.onRequestComplete()
    );
  }

  onRequestComplete() {
    console.info('Complete');
  }

  onRequestSuccess(res:Response) {
    console.info('Success');

  }

  onRequestError(res:Response) {
    this._errorService.error.next(res);
  }
}