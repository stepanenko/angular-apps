import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './sections/profile/profile.component';
import { UnderConstructionComponent } from 'src/app/common/under-construction/under-construction.component';
import { ChartComponent } from './sections/chart/chart.component';
import { AcademicPerformanceComponent } from './sections/academic-performance/academic-performance.component';


export const studentsRoutes: Routes = [
  { path: ':id', redirectTo: ':id/profile', pathMatch: 'full'},
  { path: ':id/profile',  component: ProfileComponent },
  { path: ':id/chart',    component: ChartComponent },
  { path: ':id/academic', component: AcademicPerformanceComponent },
  { path: ':id/reports',  component: UnderConstructionComponent }
];

@NgModule({
  exports: [ RouterModule ]
})
export class StudentsRoutingModule { }
