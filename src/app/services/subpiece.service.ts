import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Subpiece } from '../models/subpiece';

@Injectable({
  providedIn: 'root'
})
export class SubpieceService {

  apiUrl = "https://myboschproject2612.azurewebsites.net/api/"

  constructor(private httpClient:HttpClient) { }

  getSubpieces():Observable<ListResponseModel<Subpiece>>{
    let newPath = this.apiUrl + "subpieces/getall"
    return this.httpClient.get<ListResponseModel<Subpiece>>(newPath);
  }

  getSubpieceById(id:number):Observable<ListResponseModel<Subpiece>>{
    let newPath = this.apiUrl + "subpieces/getbyid"
    return this.httpClient.get<ListResponseModel<Subpiece>>(newPath);
  }

}
