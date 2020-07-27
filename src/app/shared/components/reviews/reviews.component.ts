import { ApiService } from './../../services/api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  @Input()
  type: string;

  @Input()
  id: number;

  currentPage: number;
  reviews: any[] = [];
  noMorePage = false;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getReviews(this.type, this.id).subscribe((data: any) => {
      this.currentPage = data.page;
      this.reviews = data.results;
      if (this.currentPage === data.total_pages) {
        this.noMorePage = true;
      }
    });
  }

  loadMoreReviews() {
    this.apiService.getMoreReviews(this.type, this.id, this.currentPage + 1).subscribe((data: any) => {
      this.currentPage = data.page;
      data.results.forEach((review) => {
        this.reviews.push(review);
      });
      if (this.currentPage === data.total_pages) {
        this.noMorePage = true;
      }
    });
  }

}
