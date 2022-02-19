import { TestBed, ComponentFixture } from '@angular/core/testing';
import { UserDetailsComponent } from './user-details.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, empty, Subject } from 'rxjs';

class RouterStub {
  navigate(params) {}
}

class ActiavtedRouterStub {
  private subject = new Subject;

  // params: Observable<any> = empty();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe('UserDetailsComponent', () => {
  let fixture: ComponentFixture<UserDetailsComponent>;
  let component: UserDetailsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActiavtedRouterStub },
      ]
    });

    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance of a component', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to the users page', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });

  it('should navigate to not-found page', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    const rout: ActiavtedRouterStub = TestBed.get(ActivatedRoute);
    rout.push({ id: 0});

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });

});
