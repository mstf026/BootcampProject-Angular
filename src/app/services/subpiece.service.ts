import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Subpiece } from '../models/subpiece';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class SubpieceService {

  apiUrl = "http://myboschproject2612.azurewebsites.net/api/"

  constructor(private httpClient:HttpClient) { }

  getSubpieces():Observable<ListResponseModel<Subpiece>>{
    let newPath = this.apiUrl + "subpieces/getall"
    return this.httpClient.get<ListResponseModel<Subpiece>>(newPath);
  }

  getSubpieceById(id:number):Observable<ListResponseModel<Subpiece>>{
    let newPath = this.apiUrl + "subpieces/getbyid"
    return this.httpClient.get<ListResponseModel<Subpiece>>(newPath);
  }

  delete(subpiece:Subpiece):Observable<ResponseModel>{
    let newPath = this.apiUrl + "subpieces/delete"
    return this.httpClient.post<ResponseModel>(newPath,subpiece);
  }

  add(subpiece:Subpiece):Observable<ResponseModel>{
    let newPath = this.apiUrl + "subpieces/add"
    return this.httpClient.post<ResponseModel>(newPath,subpiece);
  }

}
