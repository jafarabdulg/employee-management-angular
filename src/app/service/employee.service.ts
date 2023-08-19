import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {Employee} from "../model/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private dataUrl = '/assets/database/db.json';
  private employees: Employee[] = [];
  constructor(private http: HttpClient) {}

  getAllEmployee(): Observable<any[]>{
    return this.http.get<any[]>(this.dataUrl);
  }

  getUpdatedData(): Employee[]{
    return this.employees;
  }

  addEmployee(data: Employee): void{
    this.employees.push(data);
  }
}
