import { Component, EventEmitter, Output } from '@angular/core';
import { FoodProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { StoreService } from 'src/app/services/store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  foodProducts: FoodProduct[] = [];
  constructor(
    private productService: ProductService,
    private storeService: StoreService
  ) {
    this.storeService.sharingObservableData = false;
  }
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.foodProducts = data;
      this.storeService.sharingObservableData = true;
    });
  }
  ngOnDestroy() {
    //
  }
  getFoodByFilter(type: string) {
    this.productService.getProductsByType(type).subscribe((data) => {
      this.foodProducts = data;
    });
  }

  test(value: string) {
    this.productService.getProductByName(value).subscribe({
      next: (data) => {
        this.foodProducts = data;
      },
      error: (error) => {
        return Swal.fire({
          title: `<span style='font-weight: bold; font-family: Quicksand' >ERROR!</span>`,
          icon: 'error',
          iconColor: '#f7948b',
          html: `
            <div>
              <p style='font-weight: bold; font-family: Quicksand'>
              ${error.error.message}
              </p>
            </div>
            `,
          background: '#f7453b',
          color: 'white',
          confirmButtonText: `<span style='font-weight: bold'>Try again!</span>`,
          confirmButtonColor: '#f7948b',
        });
      },
    });
  }
}
