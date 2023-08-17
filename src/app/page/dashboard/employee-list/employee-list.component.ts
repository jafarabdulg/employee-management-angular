import { Component } from '@angular/core';
import {EmployeeService} from "../../../service/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(){
    this.employees = this.employeeService.getEmployees();
  }
}
