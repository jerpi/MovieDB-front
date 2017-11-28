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
        updateOn: 'blur',
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(30)],
      }],
      password: ['', {
        updateOn: 'blur',
        validators:[Validators.required, Validators.minLength(8), Validators.maxLength(30)],
      }],
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.login(form.value.username, form.value.password);
    } else {
      // TODO show message
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

  hasError(key: string, error: string | string[]): boolean {
    if (isArray(error)) {
      for (let err of error) {
        if (this.form.get(key).hasError(err)) {
          return true;
        }
      }
      return false;
    }
    return this.form.get(key).hasError(<string>error);
  }


}
