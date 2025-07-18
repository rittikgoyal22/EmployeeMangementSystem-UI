import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employee';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
})
export class UpdateEmployeeComponent {
  employeeId!: number;
  employee!: Employee;
  employeeForm!: FormGroup;
  updatedEmployee!: Employee;
  submitted:boolean=false;

  constructor(
    private route: ActivatedRoute,
    private empService: EmployeeService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadEmployee(this.employeeId);
  }

  loadEmployee(id: any): void {
    this.empService.getEmployeeById(id).subscribe((data: Employee) => {
      this.employee = data;

      this.employeeForm = this.fb.group({
        id: [this.employee.id, [Validators.required]],
        firstName: [this.employee.firstName, Validators.required],
        lastName: [this.employee.lastName, Validators.required],
        email: [this.employee.email, [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
        salary: [this.employee.salary, Validators.required],
      });
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.employeeForm.valid) {
      this.updatedEmployee = this.employeeForm.value;
      this.empService
        .updateEmployeeById(this.updatedEmployee.id, this.updatedEmployee)
        .subscribe((data) => {
          this.router.navigate(['']);
        });
    }
  }
}
