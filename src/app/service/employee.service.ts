import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private dataUrl = '/assets/database/db.json';

  constructor(private http: HttpClient) {}

  getAllEmployee(): Observable<any[]>{
    return this.http.get<any[]>(this.dataUrl);
  }
}
