import { Component } from '@angular/core';
import { Employee } from '../../models/Employee';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  employee!: Employee;
  empForm!: FormGroup;
  showPassword: boolean = false;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private empService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.empForm = this.fb.group({
      firstName: ['',  Validators.required],
      lastName: ['',  Validators.required],
      email: ['',  [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['',  Validators.required],
      salary: [null,  Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.empForm.valid) {
      this.empService
        .addEmployee(this.empForm.value)
        .subscribe((data) => this.router.navigate(['employees']));
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
