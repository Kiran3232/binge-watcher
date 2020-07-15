import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../../services/movies-api.service';

@Component({
  selector: 'app-cast-and-crew',
  templateUrl: './cast-and-crew.component.html',
  styleUrls: ['./cast-and-crew.component.css']
})
export class CastAndCrewComponent implements OnInit {

  isLoaded = false;
  isError = false;
  movie: any = '';
  credits: any = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: MoviesApiService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value) => {
      this.apiService.getMovie(value.id).subscribe((movie) => {
        this.isLoaded = true;
        this.movie = movie;
        this.apiService.getCredits(value.id).subscribe((credits) => {
          this.credits = credits;
        });
      },
        (error) => {
          this.isLoaded = true;
          this.isError = true;
          console.log(error);
        });
    });
  }

}
