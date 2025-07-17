import { Component } from '@angular/core';
import { Employee } from '../../models/Employee';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {
    employee!:Employee;
    empForm!:FormGroup;
    constructor(private fb: FormBuilder, private empService:EmployeeService, private router:Router)
    {

    }

    ngOnInit():void
    {
        this.empForm = this.fb.group(
            {
                firstName:'',
                lastName:'',
                email:'',
                salary:null
            }
        )
    }

    onSubmit():void
    {
        this.empService.addEmployee(this.empForm.value).subscribe(data=>this.router.navigate(['']));
    }

    goBack():void
    {
        this.router.navigate(['']);
    }

}
