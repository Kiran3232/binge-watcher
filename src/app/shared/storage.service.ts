import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  popularMovies: any = [];
  topRatedMovies: any = [];

  constructor() { }

  // get popularMovies() {
  //   return this._popularMovies;
  // }

  // get topRatedMovies() {
  //   return this._topRatedMovies;
  // }
}
