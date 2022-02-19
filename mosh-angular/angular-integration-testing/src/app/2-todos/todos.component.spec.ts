
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpModule } from '@angular/http';
import { from } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    });

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance of the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos from the server', () => {
    const service = TestBed.get(TodoService);
    // fixture.debugElement.injector.get(TodoService); // valid but too noisy
    spyOn(service, 'getTodos').and.returnValue(from([ [1, 2, 3] ]));

    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });

});
