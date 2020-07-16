import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/app/shared/storage.service';
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
    else {
      this.movies = this.storageService.popularMovies;
    }
    if (this.movies.length === 0) {
      this.apiService.getMovies(this.movieType).subscribe((data: Movies) => {
        this.isLoaded = true;
        this.movies = data.results;
        this.currentPage = data.page;
        if (this.movieType === 'top_rated') {
          this.storageService.topRatedMovies = this.movies;
        }
        else {
          this.storageService.popularMovies = this.movies;
        }
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

  getMoreMovies() {
    this.apiService.loadMoreMovies(this.currentPage + 1, this.movieType).subscribe((data: any) => {
      console.log(data);
      this.currentPage = data.page;
      data.results.forEach((movie) => {
        this.movies.push(movie);
      });
      if (this.movieType === 'top_rated') {
        this.storageService.topRatedMovies = this.movies;
      }
      else {
        this.storageService.popularMovies = this.movies;
      }
    });
  }

  showMovieDetail(id: number) {
    this.router.navigate(['movie', id]);
  }

}
