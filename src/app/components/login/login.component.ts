import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  username: string;
  password: string;
  loading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  login() {
    this.loading = true;
    this.authService.login(this.username, this.password)
      .subscribe((res) => {
        this.loading = false;
        if (res) {
          this.router.navigate(['']);
        }
      });
  }

}
