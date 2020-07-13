import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getPopularMovies() {
    return this.http.get("https://api.themoviedb.org/3/movie/popular");
  }

  getTopRatedMovies() {
    return this.http.get("https://api.themoviedb.org/3/movie/top_rated");
  }

  getMovie(id: number) {
    return this.http.get("https://api.themoviedb.org/3/movie/" + id);
  }
}
