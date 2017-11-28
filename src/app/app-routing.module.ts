import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthGuard} from "./guards/auth.guard";
import {LandingComponent} from "./components/landing/landing.component";

const routes: Routes = [
  { path: '', component: LandingComponent},
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
