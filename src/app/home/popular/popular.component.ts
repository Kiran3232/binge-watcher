import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { MovieService } from '../../shared/movie.service';
import { StorageService } from 'src/app/shared/storage.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  currentPage: number;
  isLoaded = false;
  isError = false;
  movies: any = [];

  constructor(
    private apiService: ApiService,
    public movieService: MovieService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.movies = this.storageService.popularMovies;
    if (this.movies.length === 0) {
      this.apiService.getPopularMovies().subscribe((data: any) => {
        this.isLoaded = true;
        this.movies = data.results;
        this.currentPage = data.page
        this.storageService.popularMovies = this.movies;
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
    this.apiService.loadMoreMovies(this.currentPage + 1, 'popular').subscribe((data: any) => {
      console.log(data);
      this.currentPage = data.page;
      data.results.forEach((movie) => {
        this.movies.push(movie);
      })
      this.storageService.popularMovies = this.movies;
    });
  }

}
