import { Router } from '@angular/router';
import { StorageService } from './../../services/storage.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scroll-list',
  templateUrl: './scroll-list.component.html',
  styleUrls: ['./scroll-list.component.css']
})
export class ScrollListComponent implements OnInit {

  @Input()
  type: string;

  @Input()
  category: string;

  @Input()
  title: string;

  @Input()
  id: number;

  currentPage: number;
  isLoaded = false;
  isError = false;
  list: any[] = [];
  noMorePage = false;

  constructor(
    private apiService: ApiService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.type === 'movie') {
      if (this.category === 'top_rated') {
        this.list = this.storageService.topRatedMovies;
      }
      else if (this.category === 'popular') {
        this.list = this.storageService.popularMovies;
      }
      this.getFromAPI();
    }
    else {
      if (this.category === 'top_rated') {
        this.list = this.storageService.topRatedTvShows;
      }
      else if (this.category === 'popular') {
        this.list = this.storageService.popularTvShows;
      }
      this.getFromAPI();
    }
  }

  getFromAPI() {
    if (this.category === 'similar' || this.category === 'recommendations') {
      this.getSimilar();
    }
    else {
      this.getList();
    }
  }

  getSimilar() {
    this.apiService.getList(this.type, this.category, this.id).subscribe((data: any) => {
      this.isLoaded = true;
      this.list = data.results;
      this.currentPage = data.page;
      if (this.currentPage === data.total_pages) {
        this.noMorePage = true;
      }
    },
      (error) => {
        this.isLoaded = true;
        this.isError = true;
        console.log(error);
      });
  }

  getList() {
    if (this.list.length === 0) {
      this.apiService.getList(this.type, this.category).subscribe((data: any) => {
        this.isLoaded = true;
        this.list = data.results;
        if (this.type === 'movie') {
          if (this.category === 'top_rated') {
            this.storageService.topRatedMovies = this.list;
          }
          else if (this.category === 'popular') {
            this.storageService.popularMovies = this.list;
          }
        }
        else {
          if (this.category === 'top_rated') {
            this.storageService.topRatedTvShows = this.list;
          }
          else if (this.category === 'popular') {
            this.storageService.popularTvShows = this.list;
          }
        }
        this.currentPage = data.page;
        if (this.currentPage === data.total_pages) {
          this.noMorePage = true;
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

  getMore() {
    if (this.category === 'similar' || this.category === 'recommendations') {
      this.getMoreSimilar();
    }
    else {
      this.getMoreList();
    }
  }

  getMoreList() {
    this.apiService.loadMoreList(this.currentPage + 1, this.type, this.category).subscribe((data: any) => {
      this.currentPage = data.page;
      if (this.currentPage === data.total_pages) {
        this.noMorePage = true;
      }
      data.results.forEach((listItem) => {
        this.list.push(listItem);
      });
      if (this.type === 'movie') {
        if (this.category === 'top_rated') {
          this.storageService.topRatedMovies = this.list;
        }
        else if (this.category === 'popular') {
          this.storageService.popularMovies = this.list;
        }
      }
      else {
        if (this.category === 'top_rated') {
          this.storageService.topRatedTvShows = this.list;
        }
        else if (this.category === 'popular') {
          this.storageService.popularTvShows = this.list;
        }
      }
    });
  }

  getMoreSimilar() {
    this.apiService.loadMoreList(this.currentPage + 1, this.type, this.category, this.id).subscribe((data: any) => {
      this.currentPage = data.page;
      if (this.currentPage === data.total_pages) {
        this.noMorePage = true;
      }
      data.results.forEach((listItem) => {
        this.list.push(listItem);
      });
    });
  }

  showDetail(id: number) {
    this.router.navigate([this.type, id]);
  }

}
