import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCreateFoodComponent } from './pages/form-create-food/form-create-food.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'home/products',
    component: ProductsComponent
  },
  {
    path:'home/products/:id',
    component:ProductdetailComponent
  },
  {
    path:'home/createFood',
    component:FormCreateFoodComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
