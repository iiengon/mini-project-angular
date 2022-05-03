import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PutOnShelfComponent } from '@mnproject/components/put-on-shelf/put-on-shelf.component'
import { EditPutOnShelfComponent } from '@mnproject/components/edit-put-on-shelf/edit-put-on-shelf.component'
import { HomeComponent } from '@mnproject/components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'customers',
  loadChildren: () => import('./components/customers/customers.module').then(m => m.CustomersModule)
  }
  // { path: 'shelf', component: PutOnShelfComponent },
  // { path: 'edit/shelf/:id', component: EditPutOnShelfComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
