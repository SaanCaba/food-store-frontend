import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormCreateFoodComponent } from './pages/form-create-food/form-create-food.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
import { ProductsComponent } from './pages/products/products.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'

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
    component: ProductsComponent,
    ...canActivate( () => redirectUnauthorizedTo(['/auth/login']))
  },
  {
    path:'home/products/:id',
    component:ProductdetailComponent,
    ...canActivate( () => redirectUnauthorizedTo(['/auth/login']))
  },
  {
    path:'home/createFood',
    component:FormCreateFoodComponent,
    ...canActivate( () => redirectUnauthorizedTo(['/auth/login']))
  },
  {
    path:'auth/login',
    component:LoginComponent
  },
  {
    path:'auth/register',
    component:RegisterComponent
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
