import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { MoviesApiService } from '../services/movies-api.service';
import { Movie } from '../movie.model';
import { Movies } from '../movies.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @Input()
  movieType: string;

  @Input()
  movieTypeTitle: string;

  @Input()
  movieId: number;

  currentPage: number;
  isLoaded = false;
  isError = false;
  movies: Movie[] = [];

  constructor(
    private apiService: MoviesApiService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.movieType === 'top_rated') {
      this.movies = this.storageService.topRatedMovies;
    }
    else if (this.movieType === 'popular') {
      this.movies = this.storageService.popularMovies;
    }
    if (this.movieType === 'similar' || this.movieType === 'recommendations') {
      this.getSimilarMovies();
    }
    else {
      this.getMovies();
    }
  }

  getSimilarMovies() {
    if (this.movies.length === 0) {
      this.apiService.getSimilarMovies(this.movieId, this.movieType).subscribe((data: Movies) => {
        this.isLoaded = true;
        this.movies = data.results;
        this.currentPage = data.page;
      },
        (error) => {
          this.isLoaded = true;
          this.isError = true;
          console.log(error);
        });
    }
    else {
      this.isLoaded = true;
    }
  }
  getMovies() {
    this.apiService.getMovies(this.movieType).subscribe((data: Movies) => {
      this.isLoaded = true;
      this.movies = data.results;
      this.currentPage = data.page;
      if (this.movieType === 'top_rated') {
        this.storageService.topRatedMovies = this.movies;
      }
      else if (this.movieType === 'popular') {
        this.storageService.popularMovies = this.movies;
      }
    },
      (error) => {
        this.isLoaded = true;
        this.isError = true;
        console.log(error);
      });
  }

  getMoreMovies() {
    if (this.movieType === 'similar' || this.movieType === 'recommendations') {
      this.getMoreSimilarMovies();
    }
    else {
      this.getMoreCategoryMovies();
    }
  }

  getMoreCategoryMovies() {
    this.apiService.loadMoreMovies(this.currentPage + 1, this.movieType).subscribe((data: any) => {
      this.currentPage = data.page;
      data.results.forEach((movie) => {
        this.movies.push(movie);
      });
      if (this.movieType === 'top_rated') {
        this.storageService.topRatedMovies = this.movies;
      }
      else if (this.movieType === 'popular') {
        this.storageService.popularMovies = this.movies;
      }
    });
  }

  getMoreSimilarMovies() {
    this.apiService.loadMoreSimilarMovies(this.currentPage + 1, this.movieId, this.movieType).subscribe((data: any) => {
      this.currentPage = data.page;
      data.results.forEach((movie) => {
        this.movies.push(movie);
      });
    });
  }

  showMovieDetail(id: number) {
    this.router.navigate(['movie', id]);
  }

}
