import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private router: Router
  ) { }

  showMovieDetail(movie: any) {
    this.router.navigate(['movie', movie.id]);
  }

}
