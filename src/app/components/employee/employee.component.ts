import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
    employees?:Employee[];
    str?:String;
    
    constructor(private empService: EmployeeService, private router: Router)
    {

    }
    ngOnInit()
    {
        this.getAllEmployee();
    }

    getAllEmployee():void
    {
        this.empService.getAllEmployees().subscribe(data=>this.employees = data);
    }

    deleteEmployee(id:any):void
    {
        this.empService.deleteEmployeeById(id).subscribe(data=>{this.getAllEmployee()});
    }

    updateEmployee(id:any):void
    {
        this.router.navigate(['/update', id]);
    }

    addEmployee():void
    {
        this.router.navigate(['/add']);
    }
}
