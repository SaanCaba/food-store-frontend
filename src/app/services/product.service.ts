import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FoodProduct } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl : string = 'https://backend-angular-food-store.onrender.com'
  constructor(
    private http: HttpClient
  ) { }
  getAllProducts(){
    return this.http.get<FoodProduct[]>(this.apiUrl + '/foods')
  }
  getProductDetail(id: string | null){
    return this.http.get<FoodProduct>(this.apiUrl + '/foods/' + id)
  }
  getProductsByType(type:string){
    return this.http.get<FoodProduct[]>(this.apiUrl + '/foods/filter?type=' + type)
  }
  createNewFood(data: FoodProduct){
    return this.http.post<FoodProduct>(this.apiUrl + '/foods', data)
  }
}