import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from 'src/app/main/main.component';
import { NotFoundComponent } from './main/not-found/not-found.component';
import { mainRoutes } from 'src/app/main/main-routing.module';
import { RolesGuard } from './auth/guards/roles.guard';

const routes: Routes = [
  { path: '',
    canActivate: [RolesGuard],
    component: MainComponent,
    children: mainRoutes
  },
  { path: 'login',     component: LoginComponent },
  { path: '404-error', component: NotFoundComponent },
  { path: '**',        redirectTo: '404-error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
