import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/Employee';

const baseUrl = 'http://localhost:8080/employee-service/v1/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(baseUrl);
  }

  getEmployeeById(id:number):Observable<Employee>
  {
    return this.http.get<Employee>(`${baseUrl}/${id}`);
  }

  addEmployee(employee : Employee):Observable<Employee>
  {
    return this.http.post<Employee>(baseUrl, employee);
  }

  deleteEmployeeById(id:number):Observable<String>
  {
    return this.http.delete(`${baseUrl}/${id}`, {responseType : 'text'});
  }

  updateEmployeeById(id?:number, employee?:Employee):Observable<Employee>
  {
    return this.http.patch<Employee>(`${baseUrl}/${id}`, employee);
  }


}
