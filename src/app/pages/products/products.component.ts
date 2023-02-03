import { Component } from '@angular/core';
import { FoodProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  foodProducts: FoodProduct[] = []
  constructor(
    private productService: ProductService
  ){

  }
  ngOnInit():void{
    this.productService.getAllProducts()
    .subscribe(data => {
      console.log(data)
      this.foodProducts = data;
    })
  }
  getFoodByFilter(type:string){
    this.productService.getProductsByType(type)
    .subscribe(data => {
      console.log(data)
      this.foodProducts = data;
    })
  }
}
