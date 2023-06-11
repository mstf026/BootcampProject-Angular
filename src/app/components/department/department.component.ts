import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit{

  departments:Department[];
  dataLoaded = false;
  constructor(private departmentService: DepartmentService){}
  ngOnInit(): void {
    this.getDepartments()
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe((response) => {
      this.departments = response.data;
      this.dataLoaded = true;
    })
  }

}
