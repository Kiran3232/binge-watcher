import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { MovieService } from '../../shared/movie.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  isLoaded = false;
  isError = false;
  movies: any;

  constructor(
    private apiService: ApiService,
    public movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiService.getTopRatedMovies().subscribe((data: any) => {
      this.isLoaded = true;
      this.movies = data.results;
    },
    (error) => {
      this.isLoaded = true;
      this.isError = true;
      console.log(error);
    })
  }

  // showMovieDetails(movie: any) {
  //   console.log(movie)
  //   this.router.navigate(['movie', movie.id]);
  // }

}
