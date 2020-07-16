import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  typeSuffix = 'movie/';

  constructor(
    private http: HttpClient
  ) { }

  getMovies(type: string) {
    return this.http.get(environment.baseApiUrl + this.typeSuffix + type);
  }

  getMovie(id: number) {
    return this.http.get(environment.baseApiUrl + this.typeSuffix + id);
  }

  loadMoreMovies(page: number, type: string) {
    return this.http.get(environment.baseApiUrl + this.typeSuffix + type + '?page=' + page);
  }
}
