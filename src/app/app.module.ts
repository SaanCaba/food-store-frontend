import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsComponent } from './components/foods/foods.component';
import { FoodComponent } from './components/food/food.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { CreateFoodFormComponent } from './components/create-food-form/create-food-form.component';
import { FormCreateFoodComponent } from './pages/form-create-food/form-create-food.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputBusquedaComponent } from './components/input-busqueda/input-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    FoodComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductdetailComponent,
    LoaderComponent,
    NotFoundComponent,
    FooterComponent,
    ButtonComponent,
    CreateFoodFormComponent,
    FormCreateFoodComponent,
    InputComponent,
    InputBusquedaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
