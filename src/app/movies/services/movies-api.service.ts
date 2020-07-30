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

  getMovie(id: number) {
    return this.http.get(environment.baseApiUrl + this.typeSuffix + id);
  }
}
