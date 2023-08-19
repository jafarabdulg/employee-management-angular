import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {EmployeeService} from "./service/employee.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from "./app-routing.module";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    RouterLink,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
