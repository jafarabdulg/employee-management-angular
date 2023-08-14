import { Injectable } from '@angular/core';
import {employeesData} from "../shared/dummy-data/employees-data";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees = employeesData;

  getEmployees(){
    return this.employees;
  }
}
