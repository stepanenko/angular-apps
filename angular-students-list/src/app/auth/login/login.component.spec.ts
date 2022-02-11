import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import {FormBuilder } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { of, throwError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

const activatedRouteStub = {
  snapshot: {
    queryParams: {
      returnUrl: '/home',
    }
  }
};

const routerStub = {
  navigate: url => url
};

const authServiceStub = {
  loginEmail: (email, pass) => email && pass ? of('success') : throwError(null)
};


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        FormBuilder,
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Router, useValue: routerStub },
        { provide: AuthenticationService, useValue: authServiceStub},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should have \'required\' error if email value is empty', () => {
    const email = component.loginForm.controls['email'];
    expect(email.errors['required']).toBeTruthy();
  });

  it('should not have \'required\' error if email value exsists', () => {
    const email = component.loginForm.controls['email'];
    email.setValue('test');
    expect(email.errors['required']).toBeFalsy();
  });

  it('should have \'email\' error if email value is not email', () => {
    const email = component.loginForm.controls['email'];
    email.setValue('test');
    expect(email.errors['email']).toBeTruthy();
  });

  it('should not have \'email\' error if email value is email', () => {
    const email = component.loginForm.controls['email'];
    email.setValue('test@gmail.com');
    expect(email.errors).toBeFalsy();
  });

  it('should have \'required\' error if password value is empty', () => {
    const password = component.loginForm.controls['password'];
    expect(password.errors['required']).toBeTruthy();
  });

  it('should not have \'required\' error if password value exsists', () => {
    const password = component.loginForm.controls['password'];
    password.setValue('test');
    expect(password.errors).toBeFalsy();
  });

  it('should navigate to returnUrl', fakeAsync(() => {
    const router = spyOn(component['router'], 'navigate');
    component.loginForm.setValue({
      email: 'mail',
      password: 'pass'
    });
    component.onSubmit();
    expect(router).toHaveBeenCalledWith(['/home']);
  }));

  it('should return error', fakeAsync(() => {
    const router = spyOn(component['router'], 'navigate');
    component.loginForm.setValue({
      email: 'email',
      password: ''
    });
    component.onSubmit();
    tick();
    expect(component.isValidUser).toBeFalsy();
    expect(router).toHaveBeenCalledWith(['/login']);
  }));
});

