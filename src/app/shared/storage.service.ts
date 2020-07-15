import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  popularMovies: any = [];
  topRatedMovies: any = [];
  popularTvShows: any = [];
  topRatedTvShows: any = [];

  constructor() { }
}
