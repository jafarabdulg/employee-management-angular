import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {AppModule} from "../../app.module";
import {RouterOutlet} from "@angular/router";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {NavbarComponent} from "../../shared/navbar/navbar.component";



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
