import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressBarModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { RegisterComponent } from './register/register.component';
import { RolesGuard } from './guards/roles.guard';
import { AdminGuard } from './guards/admin.guard';
@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatTooltipModule,
        MatProgressBarModule,
        RouterModule
    ],
    providers: [
        RolesGuard,
        AdminGuard,
        AuthenticationService
    ]
})

export class AuthModule { }
