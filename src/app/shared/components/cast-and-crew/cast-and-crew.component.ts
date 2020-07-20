import { ApiService } from '../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cast-and-crew',
  templateUrl: './cast-and-crew.component.html',
  styleUrls: ['./cast-and-crew.component.css']
})
export class CastAndCrewComponent implements OnInit {

  isLoaded = false;
  isError = false;
  movie: any = '';
  credits: any = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value) => {
      this.apiService.getCredits(value.type, value.id).subscribe((credits) => {
        this.credits = credits;
        this.isLoaded = true;
      },
        (error) => {
          this.isLoaded = true;
          this.isError = true;
          console.log(error);
        });
    });
  }

}
