import { TvShow } from './tvshow.model';

export interface TvShows {
    page: number;
    results: TvShow[];
    total_pages: number;
    total_results: number;
}
