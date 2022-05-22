import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketplaceComponent } from '@mnproject/components/customers/marketplace/marketplace.component';
import { CartComponent } from '@mnproject/components/customers/cart/cart.component';
import { ProductDetailComponent } from '@mnproject/components/customers/marketplace/product-detail/product-detail.component'
import { ProfileComponent } from '@mnproject/components/customers/profile/profile.component';
const routes: Routes = [
  { path: '', component: MarketplaceComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: 'cart', component: CartComponent},
  { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
