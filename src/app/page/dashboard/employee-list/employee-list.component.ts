import {Component, ViewChild} from '@angular/core';
import {EmployeeService} from "../../../service/employee.service";
import {Employee} from "../../../model/employee.model";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  displayedColumns: string[] = [
    'rowNumber', 'username', 'firstName', 'lastName', 'email', 'birthDate',
    'basicSalary', 'status', 'group', 'description', 'action'
  ];
  employees!: Employee[];
  dataSource!: MatTableDataSource<Employee>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: EmployeeService) {
  }

  ngAfterViewInit() {
    this.service.getAllEmployee().subscribe((data) => {
      this.employees = data;
      this.employees.push(...this.service.getUpdatedData());
      this.dataSource = new MatTableDataSource(this.employees);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

  getRowNumber(index: number): number {
    return this.dataSource.paginator!.pageIndex * this.dataSource.paginator!.pageSize + index + 1;
  }
}
