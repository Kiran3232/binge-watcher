import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TvShowsApiService {

  typeSuffix = 'tv/';

  constructor(
    private http: HttpClient
  ) { }

  getTvShow(id: number) {
    return this.http.get(environment.baseApiUrl + this.typeSuffix + id);
  }

  getTvShows(type: string) {
    return this.http.get(environment.baseApiUrl + this.typeSuffix + type);
  }

  loadMoreShows(page: number, type: string) {
    return this.http.get(environment.baseApiUrl + this.typeSuffix + type + '?page=' + page);
  }
}
