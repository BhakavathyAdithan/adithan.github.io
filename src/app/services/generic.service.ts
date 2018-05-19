import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import  'rxjs/observable/throw';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../common/app-error';

@Injectable()
export class GenericService {

  constructor(private url: string , private http: Http) { }

  getAll() {
    return this.http.get(this.url)
    .map(response => response.json())
    .catch(this.handleError);
  }

  create(resource) {
    return this.http.post(this.url, resource)
    .map(response => response.json())
    .catch(this.handleError);
  }

  update(resource) {
    return this.http.patch(this.url + '/' + resource.id, {isRead: true})
    .map(response => response.json())
    .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id)
    .map(response => response.json())
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 404) {
        return Observable.throw(new NotFoundError());
    }

    if (error.status === 400) {
        return Observable.throw(new BadInput(error.json()));
    }

    return Observable.throw(new AppError(error));

  }

}
