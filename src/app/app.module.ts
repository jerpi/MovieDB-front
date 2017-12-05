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
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import { MovieComponent } from './components/movie/movie.component';


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
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
