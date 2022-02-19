
import { routes } from './app.routes';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';
import { TodosComponent } from './2-todos/todos.component';
import { HomeComponent } from './home/home.component';

describe('Routes', () => {
  it('should contain a route for /users', () => {
    expect(routes).toContain({ path: 'users', component: UsersComponent});
  });

  it('should contain a route for /users/:id', () => {
    expect(routes).toContain({ path: 'users/:id', component: UserDetailsComponent});
  });

  it('should contain a route for /todos', () => {
    expect(routes).toContain({ path: 'todos', component: TodosComponent});
  });

  it('should contain a route for home', () => {
    expect(routes).toContain({ path: '', component: HomeComponent});
  });

});
