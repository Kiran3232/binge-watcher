import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './token.interceptor';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { TvShowsListComponent } from './tv-shows/tv-shows-list/tv-shows-list.component';
import { TvShowDetailComponent } from './tv-shows/tv-show-detail/tv-show-detail.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ApiErrorComponent } from './shared/components/api-error/api-error.component';
import { CastAndCrewComponent } from './shared/components/cast-and-crew/cast-and-crew.component';
import { ReviewsComponent } from './shared/components/reviews/reviews.component';
import { InfoCardComponent } from './shared/components/info-card/info-card.component';
import { DetailCardComponent } from './shared/components/detail-card/detail-card.component';
import { ScrollCastComponent } from './shared/components/scroll-cast/scroll-cast.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailComponent,
    CastAndCrewComponent,
    HeaderComponent,
    SidenavComponent,
    MoviesListComponent,
    TvShowsListComponent,
    TvShowDetailComponent,
    MoviesComponent,
    TvShowsComponent,
    SpinnerComponent,
    ApiErrorComponent,
    ReviewsComponent,
    InfoCardComponent,
    DetailCardComponent,
    ScrollCastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
