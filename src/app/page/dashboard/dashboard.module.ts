import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {AppModule} from "../../app.module";
import {RouterOutlet} from "@angular/router";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {NavbarComponent} from "../../shared/navbar/navbar.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class DashboardModule { }
