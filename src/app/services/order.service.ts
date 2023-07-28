import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Order } from '../models/order';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl:string = "http://myboschproject2612.azurewebsites.net/api/"

  constructor(private httpClient:HttpClient) { }

  getOrders():Observable<ListResponseModel<Order>>{
    return this.httpClient.get<ListResponseModel<Order>>(this.apiUrl + "orders/getall");
  }

  add(order:Order):Observable<ResponseModel>{
    let newPath = this.apiUrl + "orders/add"
    return this.httpClient.post<ResponseModel>(newPath,order);
  }

  delete(order:Order):Observable<ResponseModel>{
    let newPath = this.apiUrl + "orders/delete"
    return this.httpClient.post<ResponseModel>(newPath,order);
  }
}
