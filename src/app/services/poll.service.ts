import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { Poll } from './../models/poll.model';

const apiUrl = environment.apiUrl;

@Injectable()
export class PollService {

  constructor(private http: Http) { }

  createPoll(poll) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.post(apiUrl + '/polls', poll, options)
      .map(res => {
        return res.json();
      });
  }

  submitVote(id, answer: number) {
    const options = new RequestOptions();
    options.withCredentials = true;

    const data = {
      answer: answer
    };

    return this.http.post(apiUrl + `/polls/${id}/votes`, data, options)
      .map(res => {
        return res.json();
      });
  }

  getOwnersPoll() {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + '/polls/active/owner', options)
      .map(res => res.json());
  }


  getPoll(id) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + `/polls/${id}`, options)
      .map(res => res.json());
    }

  getPollOptions(id) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + `/polls/${id}/options`, options)
      .map(res => res.json());
  }

  getPollList() {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + '/polls/active', options)
      .map(res => res.json());
  }

}
