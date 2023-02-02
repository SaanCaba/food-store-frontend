import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FoodProduct } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl : string = 'http://localhost:3001'
  constructor(
    private http: HttpClient
  ) { }
  getAllProducts(){
    return this.http.get<FoodProduct[]>(this.apiUrl + '/foods')
  }
}
