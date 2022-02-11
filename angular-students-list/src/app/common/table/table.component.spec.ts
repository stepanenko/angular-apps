import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material';
import {  Observable, of } from 'rxjs';


describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [MatTableModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.data = new Observable();
    component.columns = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should transform input - without whitespace from both ends and to lower case', () => {
    const filterValue = ' Joy ';
    component.dataSource = [ {name: 'Vova'}, {name: 'Olesya'} ];
    component.applyFilter(filterValue);
    expect(component.dataSource.filter).toBe('joy');
  });

  it('should resieve labels of tabs', () => {
    const columns = [
      {key: 'subject', header: 'Course'},
      {key: 'mark', header: 'Grade'}];
    component.columns = columns;
    component.ngOnInit();
    expect(component. displayedColumn).toEqual(['subject', 'mark']);
  });

  it('should set infromation about student performance from a parent component', () => {
    component.data = of([ 1, 2, 3 ]);
    component.ngOnInit();
    expect(component.dataSource.data).toEqual( [ 1, 2, 3 ] );
  });
});
