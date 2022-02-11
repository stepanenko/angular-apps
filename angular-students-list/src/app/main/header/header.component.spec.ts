import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HeaderComponent } from './header.component';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../../auth/authentication.service';

const authServiceStub = {
  getAuth: () => new Observable(),
  logout: () => [{ a: undefined }],
  user$: of ('Vova')
};

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [ {provide: AuthenticationService, useValue: authServiceStub} ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout be called', fakeAsync(() => {
    const logout = spyOn(component['authentificationService'], 'logout');
    component.onClickLogout();
    expect(logout).toHaveBeenCalled();
  }));

});
