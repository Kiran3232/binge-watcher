import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {

  constructor(
    private http: HttpClient
  ) { }

  getMovies(type: string) {
    return this.http.get("https://api.themoviedb.org/3/movie/" + type);
  }

  getMovie(id: number) {
    return this.http.get("https://api.themoviedb.org/3/movie/" + id);
  }

  getCredits(id: number) {
    return this.http.get("https://api.themoviedb.org/3/movie/" + id + "/credits");
  }

  loadMoreMovies(page: number, type: string) {
    return this.http.get("https://api.themoviedb.org/3/movie/" + type + "?page=" + page);
  }
}
