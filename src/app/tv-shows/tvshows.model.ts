import { TvShow } from './tvshow.model';

export class TvShows {
    page: number;
    total_pages: number;
    total_results: number;
    results: TvShow[];
}