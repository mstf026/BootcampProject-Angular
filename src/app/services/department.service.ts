import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  apiUrl = "https://localhost:7094/api/";
  constructor(private httpClient: HttpClient) { }


  getDepartments():Observable<ListResponseModel<Department>>{
    let newPath = this.apiUrl + "departments/getall"
    return this.httpClient.get<ListResponseModel<Department>>(newPath);
  }
}
