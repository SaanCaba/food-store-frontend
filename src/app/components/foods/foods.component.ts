import { Component, Input } from '@angular/core';
import { FoodProduct } from 'src/app/models/product.model';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent {
  @Input() foods : FoodProduct[] = []
}
