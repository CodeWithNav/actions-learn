import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import {HomeModule} from "../home/home.module";
import {ProfileComponent} from "../home/profile/profile.component";



@NgModule({
  declarations: [
    ProductCardComponent
  ],
    imports: [
      CommonModule,
      HomeModule,
    ]
})
export class ProductModule { }
