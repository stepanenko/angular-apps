import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TabnavComponent } from './tabnav.component';

describe('TabnavComponent', () => {
  let component: TabnavComponent;
  let fixture: ComponentFixture<TabnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabnavComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit on click', () => {
    spyOn(component.tabnavClick, 'emit');
    component.handleTabNavClick('bar');
    expect(component.tabnavClick.emit).toHaveBeenCalledWith('bar');
  });
});
