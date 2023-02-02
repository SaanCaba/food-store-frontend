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

@NgModule({
  declarations: [
    AppComponent,
    FoodsComponent,
    FoodComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ProductdetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
