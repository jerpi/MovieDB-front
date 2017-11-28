import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent {

  username: string;
  password: string;
  loading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  register() {
    this.loading = true;
    this.authService.register(this.username, this.password)
      .subscribe((res) => {
        this.loading = false;
        if (res) {
          this.router.navigate(['']);
        }
      });
  }

}
