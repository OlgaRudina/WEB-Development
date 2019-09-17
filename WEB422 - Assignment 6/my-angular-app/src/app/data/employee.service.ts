import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { EmployeeRaw } from "./employeeRaw";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) {}

  getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>("https://stormy-plains-71044.herokuapp.com/employees");
  }

  saveEmployee(employee : EmployeeRaw) : Observable<any> {
    return this.http.put<any>("https://stormy-plains-71044.herokuapp.com/employee/" + employee._id, employee);
  }

  getEmployee(id) : Observable<EmployeeRaw[]> {
    return this.http.get<EmployeeRaw[]>("https://stormy-plains-71044.herokuapp.com/employee-raw/" + id);
  }

}