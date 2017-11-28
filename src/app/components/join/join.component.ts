import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {isArray} from "util";

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  form: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', {
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(30)],
      }],
      password: ['', {
        validators:[Validators.required, Validators.minLength(8), Validators.maxLength(30)],
      }],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.register(this.form.value.username, this.form.value.password);
    } else {
      // TODO show message
    }
  }

  register(username: string, password: string) {
    this.loading = true;
    this.authService.register(username, password)
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
