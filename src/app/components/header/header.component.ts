import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  get showSignInButtons() {
    return this.router.url != '/join' && this.router.url != '/login' && !this.authService.isLoggedIn;
  }

  get showMenuButton() {
    return this.router.url != '/join' && this.router.url != '/login' && this.authService.isLoggedIn;
  }
}
