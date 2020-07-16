import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TvShowsApiService } from '../services/tv-shows-api.service';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css']
})
export class TvShowDetailComponent implements OnInit {

  isLoaded = false;
  isError = false;
  show: any = '';
  credits: any = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private tvShowsApiService: TvShowsApiService,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value) => {
      this.tvShowsApiService.getTvShow(value.id).subscribe((movie) => {
        this.isLoaded = true;
        this.show = movie;
        console.log(movie);
        this.apiService.getCredits('tv', value.id).subscribe((credits) => {
          this.credits = credits;
          console.log(credits);
        });
      },
        (error) => {
          this.isLoaded = true;
          this.isError = true;
          console.log(error);
        });
    });
  }

  showCast() {
    this.router.navigate(['tv', this.show.id, 'credits']);
  }

}
