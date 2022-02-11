import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AcademicPerformanceComponent } from './academic-performance.component';
import { StudentsService } from '../../students.service';
import { Observable } from 'rxjs';

const studentServiceStub = {
    selectedStudent$: new Observable()
};

describe('AcademicPerformanceComponent', () => {
  let component: AcademicPerformanceComponent;
  let fixture: ComponentFixture<AcademicPerformanceComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicPerformanceComponent ],
      providers: [ {provide: StudentsService, useValue: studentServiceStub}],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.data$ = new Observable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a value and set it as filtervalue', () => {
    const value = 'Joy';
    component.applyFilter(value);
    expect(component.filterStr).toEqual('Joy');
  });
});
