import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { MovieService } from '../../shared/movie.service';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  isLoaded = false;
  isError = false;
  movies: any = [];
  currentPage: number;

  constructor(
    private apiService: ApiService,
    public movieService: MovieService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.movies = this.storageService.topRatedMovies;
    if (this.movies.length === 0) {
      this.apiService.getTopRatedMovies().subscribe((data: any) => {
        this.isLoaded = true;
        this.movies = data.results;
        console.log(data);
        this.currentPage = data.page;
        this.storageService.topRatedMovies = this.movies;
      },
        (error) => {
          this.isLoaded = true;
          this.isError = true;
          console.log(error);
        })
    }
    else {
      this.isLoaded = true;
    }
  }

  getMoreMovies() {
    this.apiService.loadMoreMovies(this.currentPage + 1, 'top_rated').subscribe((data: any) => {
      console.log(data);
      this.currentPage = data.page;
      data.results.forEach((movie) => {
        this.movies.push(movie);
      })
      this.storageService.topRatedMovies = this.movies;
    });
  }

  // showMovieDetails(movie: any) {
  //   console.log(movie)
  //   this.router.navigate(['movie', movie.id]);
  // }

}
