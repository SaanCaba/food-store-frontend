import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-create-food',
  templateUrl: './form-create-food.component.html',
  styleUrls: ['./form-create-food.component.css'],
})
export class FormCreateFoodComponent {
  infoFoodForm: FoodProduct = {
    name: '',
    type: '',
    image: '',
    description: '',
  };
  types = ['Burger', 'Pizza'];
  loader: boolean = false;

  constructor(
    private productService: ProductService,
    private location: Location,
    private router: Router
  ) {}

  createFood() {
    this.loader = true;
    this.productService.getAllProducts();
    this.productService.createNewFood(this.infoFoodForm).subscribe({
      next: async () => {
        this.loader = false;
        await Swal.fire({
          title: `<span style='font-weight: bold; font-family: Quicksand' >Congrats!</span>`,
          iconColor: '#edf2ef',
          html: `
            <div>
            <p style='font-weight: bold; font-family: Quicksand'>
              You can go to the menu to see your product!
            </p>
            </div>
          `,
          icon: 'success',
          background: '#92eb7f',
          confirmButtonText: `<span style='color:white'>Continue</span>`,
          confirmButtonColor: 'black',
        });
        this.infoFoodForm = {
          name: '',
          type: '',
          image: '',
          description: '',
        };
        return this.router.navigate(['/home/products']);
      },
      error: async (error) => {
        this.loader = false;
        await Swal.fire({
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

  getFile($event: any) {
    const file = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      // this.infoFoodForm.image = reader.result
      this.infoFoodForm.image = reader.result;
    };
  }

  goBack($event: Event) {
    $event.preventDefault();
    this.location.back();
  }
}
