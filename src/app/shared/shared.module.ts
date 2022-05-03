import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ProductItemComponent } from './product-item/product-item.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ProductItemComponent
  ],

})
export class SharedModule { }
