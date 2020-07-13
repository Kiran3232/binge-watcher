import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  movies: any;

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiService.getTopRatedMovies().subscribe((data: any) => {
      this.movies = data.results;
    })
  }

  showMovieDetails(movie: any) {
    console.log(movie)
    this.router.navigate(['movie', movie.id]);
  }

}
