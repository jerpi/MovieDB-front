import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>
  {
    const obs = this.authService.isAuth();
    obs.subscribe(
      isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['/login']);
        }
      }
    );
    return obs;
  }
}
