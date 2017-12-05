import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthGuard} from "./guards/auth.guard";
import {LandingComponent} from "./components/landing/landing.component";
import {LoginComponent} from "./components/login/login.component";
import {JoinComponent} from "./components/join/join.component";
import { MovieComponent } from "./components/movie/movie.component";

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'login', component: LoginComponent},
  { path: 'join', component: JoinComponent},
  { path: 'movie/:id', component: MovieComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
  ],
})
export class AppRoutingModule { }
