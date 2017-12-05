import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authService
      .logout()
      .subscribe(
          val =>  {
            if (val) {
              //logout
              this.router.navigate(['/']);
            } else {
              //error
            }
          }
      )
    
  }

}
