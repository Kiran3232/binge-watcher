import { TvShow } from './../../../tv-shows/tvshow.model';
import { Movie } from './../../../movies/movie.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  @Input()
  movie: Movie;

  @Input()
  show: TvShow;

  info: any;

  constructor() { }

  ngOnInit(): void {
    if (this.movie) {
      this.info = this.movie;
    } else {
      this.info = this.show;
    }
  }

}
