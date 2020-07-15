import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowsApiService {

  constructor(
    private http: HttpClient
  ) { }

  getTvShows(type: string) {
    return this.http.get("https://api.themoviedb.org/3/tv/" + type);
  }

  loadMoreShows(page: number, type: string) {
    return this.http.get("https://api.themoviedb.org/3/tv/" + type + "?page=" + page);
  }
}
