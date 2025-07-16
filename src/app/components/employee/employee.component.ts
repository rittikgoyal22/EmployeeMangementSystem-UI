import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
    employees?:Employee[];
    
    constructor(private empService: EmployeeService)
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
        console.log("Delete Button Clicked");
        this.empService.deleteEmployeeById(id);
        this.getAllEmployee();

    }
}
