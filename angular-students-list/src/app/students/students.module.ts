import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { ProfileModule } from '../students/sections/profile/profile.module';
import { StudentsListModule } from './students-list/students-list.module';
import { TabnavModule } from 'src/app/common/tabnav/tabnav.module';
import { StudentsRoutingModule } from './students-routing.module';
import { ChartModule } from './sections/chart/chart.module';
import { RouterModule } from '@angular/router';
import { StudentsService } from './students.service';
import { AcademicPerformaceModule } from './sections/academic-performance/academic-performance.module';


@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ProfileModule,
    StudentsListModule,
    TabnavModule,
    RouterModule,
    ChartModule,
    AcademicPerformaceModule
  ],
  declarations: [
    StudentsComponent,
  ],
  exports: [ StudentsComponent ],
  providers: [ StudentsService ]
})
export class StudentsModule { }
