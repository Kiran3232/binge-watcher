import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesApiService } from '../services/movies-api.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  isLoaded = false;
  isError = false;
  movie: any = '';
  credits: any = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: MoviesApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value) => {
      this.apiService.getMovie(value.id).subscribe((movie) => {
        this.isLoaded = true;
        this.movie = movie;
        console.log(movie);
        this.apiService.getCredits(value.id).subscribe((credits) => {
          this.credits = credits;
          console.log(credits)
        })
      },
        (error) => {
          this.isLoaded = true;
          this.isError = true;
          console.log(error);
        });
    });
  }

  showCast() {
    this.router.navigate(['movie', this.movie.id, "credits"]);
  }
}
