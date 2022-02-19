import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, empty, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property...', () => {
    const todos = [1, 2, 3];

    spyOn(service, 'getTodos').and.callFake(() => {
      return from([ todos ]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos.length).toBe(3);
    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the changes', () => {
    const spy = spyOn(service, 'add').and.callFake(t => {
      return empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add a new todo', () => {
    const todo = { id: 1 };
    spyOn(service, 'add').and.returnValue(from([ todo ]));

    // spyOn(service, 'add').and.callFake(t => {
    //   return from([ todo ]);
    // });  // also valid test

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should throw an error when needed', () => {
    const error = 'error from server';
    spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);
  });

  it('should delete todo if confirmed', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should not delete todo if not confirmed', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'delete').and.returnValue(empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });

});
