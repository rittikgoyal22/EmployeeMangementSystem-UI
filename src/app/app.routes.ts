import { Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeComponent, canActivate: [authGuard]},
    { path: 'update/:id', component: UpdateEmployeeComponent, canActivate: [authGuard] },
    { path: 'add', component: AddEmployeeComponent },
    { path: '**', redirectTo: 'login' }
];
