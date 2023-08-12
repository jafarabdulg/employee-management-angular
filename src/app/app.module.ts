import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import {NgOptimizedImage} from "@angular/common";
import { NavbarComponent } from './shared/navbar/navbar.component';
import {RouterLink} from "@angular/router";
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { PagingNavComponent } from './shared/paging-nav/paging-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    EmployeeListComponent,
    PagingNavComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
