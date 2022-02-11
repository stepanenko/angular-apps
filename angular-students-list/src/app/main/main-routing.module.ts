import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { studentsRoutes } from 'src/app/students/students-routing.module';
import { StudentsComponent } from 'src/app/students/students.component';
import { AdminComponent } from '../admin/admin.component';
import { AdminGuard } from '../auth/guards/admin.guard';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { TeacherComponent } from '../teacher/teacher.component';
import { ChatComponent } from '../chat/chat.component';


export const mainRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',      component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'teacher',   component: TeacherComponent },
  { path: 'chat',      component: ChatComponent },
  { path: 'students',  component: StudentsComponent, children: studentsRoutes },
  { path: 'admin',     component: AdminComponent, canActivate: [AdminGuard] }
];

@NgModule({
  exports: [ RouterModule ]
})
export class MainRoutingModule { }
