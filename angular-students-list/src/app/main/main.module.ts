import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainRoutingModule } from './main-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { DatabaseService } from '../shared/services/db.service';
import { AdminComponent } from '../admin/admin.component';
import { AdminGuard } from 'src/app/auth/guards/admin.guard';
import { MatSelectModule } from '@angular/material/select';
import { ChatService } from '../chat/chat.service';
import { MatBadgeModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MainRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatBadgeModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    NotFoundComponent,
    AdminComponent,
  ],
  exports: [ MainComponent ],
  providers: [
    DatabaseService,
    AdminGuard,
    ChatService
  ]
})
export class MainModule { }
