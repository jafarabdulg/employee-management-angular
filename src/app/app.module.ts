import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import {NgOptimizedImage} from "@angular/common";
import { NavbarComponent } from './shared/navbar/navbar.component';
import {RouterLink} from "@angular/router";
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { PagingNavComponent } from './shared/paging-nav/paging-nav.component';
import {EmployeeService} from "./service/employee.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    EmployeeListComponent,
    PagingNavComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    RouterLink,
    BrowserAnimationsModule
  ],
  providers: [EmployeeService],
  exports: [
    NavbarComponent,
    EmployeeListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
