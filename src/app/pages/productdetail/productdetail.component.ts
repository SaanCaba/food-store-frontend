import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs';
import { FoodProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent {
  foodId: string | null = '';
  foodProduct: FoodProduct = {
    id: 0,
    name: '',
    image: '',
    type: '',
    description: '',
  };
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService,
    private location: Location,
    private storeService: StoreService
  ) {
    this.storeService.sharingObservableData = false;
  }
  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.foodId = params.get('id');
          if (this.foodId) {
            return this.productsService.getProductDetail(this.foodId);
          }
          return [];
        })
      )
      .subscribe((data) => {
        this.foodProduct = data;
        this.storeService.sharingObservableData = true;
      });
  }

  goBack() {
    this.location.back();
  }
}
