import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { SharedModule } from '@mnproject/shared/shared.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    MarketplaceComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
