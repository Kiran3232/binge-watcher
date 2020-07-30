import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getCredits(type: string, id: number) {
    return this.http.get(environment.baseApiUrl + type + '/' + id + '/credits');
  }

  getReviews(type: string, id: number) {
    return this.http.get(environment.baseApiUrl + type + '/' + id + '/reviews');
  }

  getMoreReviews(type: string, id: number, page: number) {
    return this.http.get(environment.baseApiUrl + type + '/' + id + '/reviews' + '?page=' + page);
  }

  getList(type: string, category: string, id?: number) {
    if (id === undefined) {
      return this.http.get(environment.baseApiUrl + type + '/' + category);
    }
    else {
      return this.http.get(environment.baseApiUrl + type + '/' + id + '/' + category);
    }
  }

  loadMoreList(page: number, type: string, category: string, id?: number) {
    if (id === undefined) {
      return this.http.get(environment.baseApiUrl + type + '/' + category + '?page=' + page);
    }
    else {
      return this.http.get(environment.baseApiUrl + type + '/' + id + '/' + category + '?page=' + page);
    }
  }
}
