import { TestBed } from '@angular/core/testing';

import { TvShowsApiService } from './tv-shows-api.service';

describe('TvShowsApiService', () => {
  let service: TvShowsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowsApiService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
