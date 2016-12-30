import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RedditService {
  private baseUrl: string = 'https://www.reddit.com/r';

  constructor(public http: Http) { }

  /**
   * Get all posts by given category
   * 
   * @param {string} category - category of the posts we want to fetch
   * @param {string} limit - count of posts we want to fetch
   * @returns {Observable<Response>}
   * 
   * @memberOf RedditService
   */
  public getPosts(category: string, limit: string): Observable<Response> {
    return this.http
      .get(`${this.baseUrl}/${category}/top.json?limit=${limit}`)
      .map((res: Response) => res.json());
  }
}
