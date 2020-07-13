import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/shared/api.service';
import { MovieService } from '../../shared/movie.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  isLoaded = false;
  isError = false;
  movies: any;

  constructor(
    private apiService: ApiService,
    public movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.apiService.getPopularMovies().subscribe((data: any) => {
      this.isLoaded = true;
      this.movies = data.results;
    },
    (error) => {
      this.isLoaded = true;
      this.isError = true;
      console.log(error);
    })
  }

}
