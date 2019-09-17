import { Component, OnInit } from '@angular/core';
import { Employee } from './data/employee';
import { EmployeeService } from './data/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];
  getEmployeesSub: any;
  loadingError:boolean = false;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.getEmployeesSub = this.employeeService.getEmployees().subscribe( data => {
      this.employees = data;
      this.filteredEmployees = data;
    }, 
    () =>{
      this.loadingError = true;
    });
  }

  ngOnDestroy() {
    if(this.getEmployeesSub){
      this.getEmployeesSub.unsubscribe();
    }
  }

  routeEmployee(id: string){
    this.router.navigate(['/employee', id]);
  }

  onEmployeeSearchKeyUP(event:any){
    let substring : string = event.target.value.toLowerCase();
    this.filteredEmployees = this.employees.filter((e) => ((e.FirstName.toLowerCase().indexOf(substring) !== -1 ) || (e.LastName.toLowerCase().indexOf(substring) !== -1) || (e.Position.PositionName.toLocaleLowerCase().indexOf(substring) !== -1) ))
  }
}