import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { Poll } from './../models/poll.model';

const url = 'http://localhost:3000';

@Injectable()
export class PollService {

  constructor(private http: Http) { }

  createPoll(poll) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(url + '/polls', poll, options)
      .map(res => {
        return res.json();
      });
  }
}
