import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { TvShowsApiService } from '../services/tv-shows-api.service';
import { TvShow } from '../tvshow.model';
import { TvShows } from '../tvshows.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.css']
})
export class TvShowsListComponent implements OnInit {

  @Input()
  tvType: string;

  @Input()
  tvTypeTitle: string;

  shows: TvShow[] = [];
  currentPage: number;
  isLoaded = false;
  isError = false;

  constructor(
    private storageService: StorageService,
    private apiService: TvShowsApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.tvType === 'top_rated') {
      this.shows = this.storageService.topRatedTvShows;
    }
    else {
      this.shows = this.storageService.popularTvShows;
    }
    if (this.shows.length === 0) {
      this.apiService.getTvShows(this.tvType).subscribe((data: TvShows) => {
        this.isLoaded = true;
        this.shows = data.results;
        this.currentPage = data.page;
        if (this.tvType === 'top_rated') {
          this.storageService.topRatedTvShows = this.shows;
        }
        else {
          this.storageService.popularTvShows = this.shows;
        }
        console.log(this.shows);
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

  getMoreShows() {
    this.apiService.loadMoreShows(this.currentPage + 1, this.tvType).subscribe((data: any) => {
      console.log(data);
      this.currentPage = data.page;
      data.results.forEach((show) => {
        this.shows.push(show);
      });
      if (this.tvType === 'top_rated') {
        this.storageService.topRatedTvShows = this.shows;
      }
      else {
        this.storageService.popularTvShows = this.shows;
      }
    });
  }

  showTvDetail(id: number) {
    this.router.navigate(['tv', id]);
  }

}
