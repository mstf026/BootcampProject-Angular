import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ManufactureService {

  apiUrl = "https://myboschproject2612.azurewebsites.net/api/ordermanufactures/manufacture/"

  constructor(private httpClient: HttpClient) { }

  addSubpieceToStationA(orderId:number):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "1/" + orderId, orderId)
  }

  addSubpieceToStationB(orderId:number):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "2/" + orderId, orderId)
  }

  addSubpieceToStationC(orderId:number):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "3/" + orderId, orderId)
  }

  addSubpieceToStationD(orderId:number):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "4/" + orderId, orderId)
  }

  addSubpieceToStationE(orderId:number):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "5/" + orderId,orderId)
  }
}
