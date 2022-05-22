import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { SharedModule } from '@mnproject/shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './marketplace/product-detail/product-detail.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    MarketplaceComponent,
    CartComponent,
    ProductDetailComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
