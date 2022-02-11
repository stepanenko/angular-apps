import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InplaceInputComponent } from './inplace-input.component';

describe('InplaceInputComponent', () => {
  let component: InplaceInputComponent;
  let fixture: ComponentFixture<InplaceInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InplaceInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InplaceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
