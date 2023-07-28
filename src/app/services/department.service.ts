import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  apiUrl:string = "http://myboschproject2612.azurewebsites.net/api/";
  constructor(private httpClient: HttpClient) { }


  getDepartments():Observable<ListResponseModel<Department>>{
    const newPath = this.apiUrl + "departments/getall"
    return this.httpClient.get<ListResponseModel<Department>>(newPath);
  }
}
