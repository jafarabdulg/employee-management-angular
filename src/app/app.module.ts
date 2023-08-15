import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import {NgOptimizedImage} from "@angular/common";
import { NavbarComponent } from './shared/navbar/navbar.component';
import {RouterLink} from "@angular/router";
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { PagingComponent } from './shared/paging/paging.component';
import {EmployeeService} from "./service/employee.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    EmployeeListComponent,
    PagingComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    RouterLink,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
