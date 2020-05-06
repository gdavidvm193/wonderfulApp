import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './shared/bar/nav-bar/nav-bar.component';
import { SideBarComponent } from './shared/bar/side-bar/side-bar.component';
import { MovieItemComponent } from './shared/movie/movie-item/movie-item.component';
import { MovieDetailComponent } from './shared/movie/movie-detail/movie-detail.component';
import { AddMovieComponent } from './shared/movie/add-movie/add-movie.component';
import { TopComponent } from './shared/movie/top/top.component';
import { MovieService } from './shared/services/movie.service';
import { ListMovieComponent } from './shared/movie/list-movie/list-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SideBarComponent,
    MovieItemComponent,
    MovieDetailComponent,
    AddMovieComponent,
    TopComponent,
    ListMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
