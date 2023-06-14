import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://myboschproject2612.azurewebsites.net/api/"

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductById(id:number):Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getbyid"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  add(product:Product):Observable<ResponseModel>{
    let newPath = this.apiUrl + "products/add"
    return this.httpClient.post<ResponseModel>(newPath,product);
  }
  
  addSubpieces(subpieceId:number[]):Observable<ResponseModel>{
    let newPath = this.apiUrl + "products/addsubpieces"
    return this.httpClient.post<ResponseModel>(newPath,subpieceId);
  }

}
