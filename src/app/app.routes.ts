import { Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

export const routes: Routes = [
    { path: '', component: EmployeeComponent },
    { path: 'update/:id', component: UpdateEmployeeComponent },
    { path: 'add', component: AddEmployeeComponent }
];
