import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from './services/auth.service';
import { JoinComponent } from './components/join/join.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { MovieShowcaseComponent } from './components/landing/movie-showcase/movie-showcase.component';
import { CastShowcaseComponent } from './components/landing/cast-showcase/cast-showcase.component';
import { MovieCardComponent } from './components/landing/movie-showcase/movie-card/movie-card.component';
import { MovieService} from './services/movie.service';
import { CastCardComponent } from './components/landing/cast-showcase/cast-card/cast-card.component';
import {CastService} from './services/cast.service';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/movie/movie-details/movie-details.component';
import { MovieActorsComponent } from './components/movie/movie-actors/movie-actors.component';
import { MovieBandeAnnonceComponent } from './components/movie/movie-bande-annonce/movie-bande-annonce.component';
import {CastComponent} from "./components/cast/cast.component";
import {CastMoviesComponent} from "./components/cast/cast-movies/cast-movies.component";
import {CastDetailsComponent} from "./components/cast/cast-details/cast-details.component";
import {PostAreaComponent} from "./components/post-area/post-area.component";
import {PostComponent} from "./components/post-area/post/post.component";
import {SearchComponent} from "./components/header/search/search.component";
import { MoviesListComponent } from './components/header/search/movies-list/movies-list.component';
import { MovieCommentsComponent } from './components/movie/movie-comments/movie-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    JoinComponent,
    HeaderComponent,
    MovieShowcaseComponent,
    CastShowcaseComponent,
    MovieCardComponent,
    HeaderMenuComponent,
    MovieComponent,
    CastCardComponent,
    MovieDetailsComponent,
    MovieActorsComponent,
    MovieBandeAnnonceComponent,
    CastComponent,
    CastMoviesComponent,
    CastDetailsComponent,
    PostAreaComponent,
    PostComponent,
    SearchComponent,
    MoviesListComponent,
    MovieCommentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    MovieService,
    CastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
