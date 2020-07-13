import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  movies: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results;
      console.log(this.movies)
    })
  }

}
