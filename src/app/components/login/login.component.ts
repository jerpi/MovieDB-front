import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {isArray} from "util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', {
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(30)],
      }],
      password: ['', {
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(30)],
      }],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.login(form.value.username, form.value.password);
    }
  }

  login(username: string, password: string) {
    this.loading = true;
    this.authService.login(username, password)
      .subscribe((res) => {
        this.loading = false;
        if (res) {
          this.router.navigate(['']);
        }
      });
  }

}
