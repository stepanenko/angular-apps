
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { VoterComponent } from './1-voter/voter.component';
import { TodosComponent } from './2-todos/todos.component';
import { UserDetailsComponent } from './3-user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './highlight.directive';
import { UsersComponent } from './users/users.component';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    TodosComponent,
    UserDetailsComponent,
    HomeComponent,
    HighlightDirective,
    UsersComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
