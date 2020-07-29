import { TvShow } from './../../../tv-shows/tvshow.model';
import { Movie } from './../../../movies/movie.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {

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
