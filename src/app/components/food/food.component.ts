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
}
