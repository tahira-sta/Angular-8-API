import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
  // urlLimit = '?_limit=5';

  constructor(private http: HttpClient) { }

  getMakeup() {
    // return this.http.get(`${this.url}${this.urlLimit}`);
    return this.http.get(this.url);
  }
}
