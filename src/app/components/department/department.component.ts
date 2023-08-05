import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/department';
import { AuthService } from 'src/app/services/auth.service';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit{

  departments:Department[];
  dataLoaded = false;
  constructor(
    private departmentService: DepartmentService,
    private authService:AuthService){}
  ngOnInit(): void {
    this.getDepartments()
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe((response) => {
      this.departments = response.data;
      this.dataLoaded = true;
    })
  }

  isAuthenticated(){
    if(this.authService.isAuthenticated()){
      return true;
    }
    else{
      return false;
    }
  }
}
