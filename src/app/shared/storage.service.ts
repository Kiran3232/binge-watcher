import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  popularMovies: any = [];
  topRatedMovies: any = [];

  constructor() { }
}
