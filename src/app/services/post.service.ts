import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../common/app-error';
import { GenericService } from './generic.service';

@Injectable()
export class PostService extends GenericService {

  constructor(http: Http) {
    super('http://jsonplaceholder.typicode.com/posts', http);
  }


}
