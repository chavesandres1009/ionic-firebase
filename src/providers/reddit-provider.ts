import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RedditProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RedditProvider {

  baseUrl: string;

  constructor(public http: Http) {
    this.baseUrl = "https://www.reddit.com/r";
    console.log('Hello RedditProvider Provider');
  }

  getPost(category) {
    return this.http.get(this.baseUrl + '/' + category + '/top.json')
      .map(res => res.json());
  }

}
