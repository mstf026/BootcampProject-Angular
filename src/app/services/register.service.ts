import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/registerModel';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrl:string = "http://myboschproject2612.azurewebsites.net/api/auth/"
  constructor(private httpClient:HttpClient) { }

  register(registerModel:RegisterModel):Observable<ResponseModel>{
    let newPath = this.apiUrl + "register"
    return this.httpClient.post<ResponseModel>(newPath,registerModel);
  }
}
