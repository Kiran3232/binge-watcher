import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { TvShowDetailComponent } from './tv-shows/tv-show-detail/tv-show-detail.component';
import { CastAndCrewComponent } from './shared/cast-and-crew/cast-and-crew.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: ':type/:id/credits', component: CastAndCrewComponent },
  { path: 'tv/:id', component: TvShowDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
