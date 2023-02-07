import { Component, Input } from '@angular/core';
import { FoodProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  @Input() food: FoodProduct = {
    id:0,
    name: '',
    type:'',
    image:''
  }
  ngOnInit(){
    if(this.food.id === undefined){
      console.log(this.food._id)
      this.food.id = this.food._id;
      console.log(this.food.id)
    }
  }
}
