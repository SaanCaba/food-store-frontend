import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FoodProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-form-create-food',
  templateUrl: './form-create-food.component.html',
  styleUrls: ['./form-create-food.component.css']
})
export class FormCreateFoodComponent {
  infoFoodForm: FoodProduct = {
    name:'',
    type:'',
    image: '',
    description: ''
  }
  types = ['Burger', 'Pizza']
  private fileTmp: any;
  constructor(
    private productService : ProductService
  ){

  }

  createFood(){
    this.productService.getAllProducts()
    console.log(this.infoFoodForm)
    this.productService.createNewFood(this.infoFoodForm)
    .subscribe(data => console.log(data))
  }

  getFile($event: any){
    const file = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      console.log(reader.result)
      // this.infoFoodForm.image = reader.result
        this.infoFoodForm.image = reader.result
    }
  }
}
