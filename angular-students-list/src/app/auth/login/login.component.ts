import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  isValidUser = true;
  isInProgress = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.createLoginForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const getValue = prop => this.loginForm.controls[prop].value;
    const emailInput = getValue('email');
    const passwordInput = getValue('password');
    this.isInProgress = true;
    this.authenticationService.loginEmail(emailInput, passwordInput)
      .pipe(
        catchError(err => {
          this.isInProgress = false;
          this.isValidUser = false;
          this.router.navigate(['/login']);
          return throwError(err);
      })
      )
      .subscribe(() => this.router.navigate([this.returnUrl]));
  }
}
