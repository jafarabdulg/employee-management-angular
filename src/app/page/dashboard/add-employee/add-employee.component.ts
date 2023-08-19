import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../../../model/employee.model";
import {EmployeeService} from "../../../service/employee.service";
import Swal from 'sweetalert2';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private readonly service: EmployeeService, private readonly router: Router) {}

  employeeForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    basicSalary: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    group: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])
  });

  form(property: string): FormGroup{
    return this.employeeForm.get(property) as FormGroup;
  }

  saveEmployee(data: Employee): void{
    this.service.addEmployee(data);
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    });
    setTimeout(() => {
      this.router.navigateByUrl('/dashboard');
    }, 1500);
  }
}
