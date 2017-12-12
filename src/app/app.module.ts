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
import { MovieDetailComponentComponent } from './components/movie/movie-detail-component/movie-detail-component.component';
import { MovieActorsComponentComponent } from './components/movie/movie-actors-component/movie-actors-component.component';
import { MovieBaComponentComponent } from './components/movie/movie-ba-component/movie-ba-component.component';


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
    MovieDetailComponentComponent,
    MovieActorsComponentComponent,
    MovieBaComponentComponent
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
